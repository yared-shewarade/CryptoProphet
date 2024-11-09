from flask import Flask, request, jsonify, send_file
import pickle
import numpy as np
from tensorflow.keras.models import load_model
import tensorflow.keras.losses
import logging

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)

custom_objects = {
    'mse': tensorflow.keras.losses.MeanSquaredError()
}

try:
    # Load models and scalers (example for one crypto)
    model_gru = load_model('all_models/BTC_gru.h5', custom_objects=custom_objects)
    with open('all_scalers/BTC_scaler.pkl', 'rb') as f:
        scaler_data = pickle.load(f)
        scaler = scaler_data['scaler']  # Extract the scaler from the dictionary
except Exception as e:
    logging.error("Error loading model or scaler: %s", e)


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        logging.debug("Received data: %s", data)
        crypto = data['crypto']
        recent_data = np.array(data['recent_data']).reshape(-1, 1)
        logging.debug("Recent data reshaped: %s", recent_data)
        scaled_data = scaler.transform(recent_data)
        X_recent = np.array([scaled_data[-30:]])
        logging.debug("X_recent: %s", X_recent)
        prediction = model_gru.predict(X_recent)
        final_prediction = scaler.inverse_transform(prediction.reshape(-1, 1))
        logging.debug("Final prediction: %s", final_prediction)
        return jsonify({'prediction': float(final_prediction[0][0])})  # Convert to float
    except Exception as e:
        logging.error("Error in prediction: %s", e)
        return jsonify({'error': 'Prediction failed'}), 500


@app.route('/')
def index():
    return "Welcome to the CryptoProphet API "


@app.route('/predictions', methods=['GET'])
def get_predictions():
    try:
        return send_file('predictions.csv', mimetype='text/csv', as_attachment=True)
    except Exception as e:
        logging.error("Error sending predictions: %s", e)
        return jsonify({'error': 'Failed to send predictions'}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5001)
