import random
import pandas as pd
from cryptocmd import CmcScraper
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Dense, Dropout, LSTM, GRU, Bidirectional
from tensorflow.keras.callbacks import EarlyStopping
import pickle

cryptos = ["BTC", "ETH", "BNB", "ADA", "SOL", "XRP", "LTC", "LINK", "DOGE", "SHIB",
           "MANA", "VET", "XMR", "BCH", "AVAX", "TRX", "MATIC", "CRO", "RNDR", "XTZ",
           "BAT", "SC", "FTM", "DCR", "MKR", "ATOM", "STX", "XLM", "QNT", "NEO"]

lookback = 30
test_days = 365


def get_historical_data(crypto_symbol, start_date='03-01-2009', end_date='25-05-2024'):
    scraper = CmcScraper(crypto_symbol, start_date, end_date)
    df = scraper.get_dataframe()
    df['Date'] = pd.to_datetime(df['Date'])
    df['Close'] = df['Close'].astype(float)
    df = df.sort_values(by='Date')
    return df


def create_sequences(data, lookback):
    X, y = [], []
    for i in range(len(data) - lookback - 1):
        X.append(data[i:i + lookback])
        y.append(data[i + lookback + 1])
    return np.array(X), np.array(y)


def prepare_data(df, lookback, test_days):
    data = df[['Close']].values
    train_data = data[:-test_days]
    test_data = data[-test_days:]
    scaler = MinMaxScaler()
    train_scaled = scaler.fit_transform(train_data)
    test_scaled = scaler.transform(test_data)
    X_train, y_train = create_sequences(train_scaled, lookback)
    X_test, y_test = create_sequences(test_scaled, lookback)
    return X_train, X_test, y_train, y_test, scaler


def build_and_train_model(model_type, X_train, y_train, X_val, y_val):
    model = Sequential()
    if model_type == 'LSTM':
        model.add(LSTM(50, activation='tanh', return_sequences=False, input_shape=(lookback, 1)))
    elif model_type == 'GRU':
        model.add(GRU(50, activation='tanh', return_sequences=False, input_shape=(lookback, 1)))
    elif model_type == 'Bi-LSTM':
        model.add(Bidirectional(LSTM(50, activation='tanh', return_sequences=False), input_shape=(lookback, 1)))
    model.add(Dropout(0.1))
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mse')
    early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)
    history = model.fit(X_train, y_train, epochs=100, batch_size=32, validation_data=(X_val, y_val), verbose=1, callbacks=[early_stopping])
    val_loss = min(history.history['val_loss'])
    return model, val_loss


def train_and_save_models(crypto):
    df = get_historical_data(crypto)
    X_train, X_test, y_train, y_test, scaler = prepare_data(df, lookback, test_days)
    val_size = int(0.2 * len(X_train))
    X_val, y_val = X_train[-val_size:], y_train[-val_size:]
    X_train, y_train = X_train[:-val_size], y_train[:-val_size]
    model_gru, val_loss_gru = build_and_train_model('GRU', X_train, y_train, X_val, y_val)
    model_gru.save(f'all_models/{crypto}_gru.h5')
    with open(f'all_scalers/{crypto}_scaler.pkl', 'wb') as f:
        pickle.dump({'scaler': scaler, 'val_losses': [val_loss_gru]}, f)


def load_models_and_predict(crypto, lookback, recent_data):
    model_gru = load_model(f'all_models/{crypto}_gru.h5', compile=False)
    with open(f'all_scalers/{crypto}_scaler.pkl', 'rb') as f:
        data = pickle.load(f)
        scaler = data['scaler']
        val_losses = data['val_losses']
    scaled_data = scaler.transform(recent_data)
    X_recent = np.array([scaled_data[-lookback:]])
    prediction = model_gru.predict(X_recent)
    final_prediction = scaler.inverse_transform(prediction.reshape(-1, 1))
    return final_prediction[0][0]


results = []
for crypto in cryptos:
    train_and_save_models(crypto)
    df = get_historical_data(crypto)
    recent_data = df[['Close']].values[-(lookback + 1):]
    actual_price = df['Close'].values[-1]
    predicted_price = load_models_and_predict(crypto, lookback, recent_data)
    results.append({
        'crypto': crypto,
        'actual_price': actual_price,
        'predicted_price': predicted_price
    })

results_df = pd.DataFrame(results)
results_df.to_csv('predictions.csv', index=False)
