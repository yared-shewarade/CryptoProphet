# 📱 CryptoProphet: Mobile App

# Building a Cryptocurrency Portfolio App with Integrated Crypto Market Predictive Models

# 📘 Overview

The **App** folder folder contains the source code for the **Mobile App** of **CryptoProphet**, developing using **React Native** and integrated with a Flask backend. This app enbales users to manage their cryptocurrency portfolios, fetch real-time prices, and predict future values using advanced machine learning models.

# 📂 Directory Structure

```plaintext
App/
├── App.js                         # Main entry point for the app
├── app.json                       # Configuration for the app
├── assets/                        # Contains images, fonts, and other static resources
├── babel.config.js                # Babel configuration for the app
├── backend/                       # Flask backend code
│   ├── all_models/                # Trained ML models (LSTM, GRU, Bi-LSTM)
│   ├── all_scaler/                # Scalers used for preprocessing data
│   ├── app.py                     # Flask API to handle predictions
│   ├── requirements.txt           # Backend dependencies
│   ├── train_models.py            # Script for training machine learning models
├── components/                    # Reusable React Native components
│   ├── AssetInput.js              # Handles user input for crypto assets
│   ├── CurrentPriceDisplay.js     # Displays the current price of selected cryptos
│   ├── ForecastDisplay.js         # Displays future price predictions
│   ├── PurchasedPriceInput.js     # Handles user input for purchased price
│   ├── QuantityInput.js           # Handles user input for purchased quantity
│   ├── TotalValueDisplay.js       # Displays the total value of the portfolio
├── package.json                   # NPM dependencies and project metadata
├── package-lock.json              # Locks the dependency versions
├── services/                      # Contains service scripts for API and data handling
│   ├── coinGeckoService.js        # Fetches live data from the CoinGecko API
│   ├── historicalDataService.js   # Retrieves historical crypto data
│   ├── predictService.js          # Sends data to Flask API and fetches predictions
├── README.md                      # Documentation for the App folder
```

# 🚀 Features

* **Portfolio Management**: Track your cryptocurrency assets, including purchased price, quantity, and total value.
* **Real-Time Data**: Fetch live cryptocurrency prices using the CoinGeck API.
* **Future Predictions**: Leverage advancd machine learning models (LSTM, GRU, Bi-LSTM) to predictive future prices.
* **Customizable Inputs**: Input your own purchased prices and quantities for accuraties for accurate portfolio tracking.

# 📊 Components

## Frontend (React Native Components)

* **AssetInput.js**: Input fields for adding cryptocurrency assets.
* **CurrentPriceDisplay.js**: Displays the latest prices for the selected cryptos.
* **ForecastDisplay.js**: Shows predictions for future prices.
* **PurchasedPriceInput.js**: Input fields for specifying purchased prices.
* **QuantityInput.js**: Input fields for specifying purchased quantities.
* **TotalValueDisplay.js**: Displays the total portfolio value, including profit/loss calculations.

## Backend (Flask API)

* app.py: Handles API requests for predictions and integrates with trained models.
* train_models.py: Contains scripts for training LSTM, GRU, and Bi-LSTM models.
* all_models/: Folder with pre-trained models.
* all_scaler/: Contains preprocessing scalers for input data.

# 🔧 Installation

## Prerequisites

* Node.js installed on your system.
* Python for the backend
* A virtual environment for managing Python dependencies

## A. Set Up the Backend

1. Navigate to the backend folder:

   cd backend
2. Create and activate a Python virtual environment:

   On macOS/Linux:

   python3 -m venv crypto_venv
   source crypto_venv/bin/activate

   On Windows:

   python -m venv crypto_venv
   crypto_venv\Scripts\activate
3. Install the required dependencies:

   pip install -r requirements.txt
4. Start the Flask API:

   python app.py

## B. Set Up the Mobile App

1. Navigate to the **App** directory:

   cd App
2. Install the dependencies:

   npm install
3. Start the development server:

   npm start

## C. Retrain the Models (Optional)

**Note**: The Model is trained and saved in the **all_models/** folder, and the preprocessing scalers saved in the **all_scaler/** folder. However if you want to retrain the machine learning models from scratch (e.g, with updated data), run the following python scripts:

python train_models.py
