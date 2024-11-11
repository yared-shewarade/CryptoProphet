# 📱 CryptoProphet: Mobile App

# Building a Cryptocurrency Portfolio App with Integrated Crypto Market Predictive Models

# 📘 Overview

The **App** folder folder contains the source code for the **Mobile App** of **CryptoProphet**, developing using **React Native** and integrated with a Flask backend. This app enbales users to manage their cryptocurrency portfolios, fetch real-time prices, and predict future values using advanced machine learning models.

# 📂 Directory Structure

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

# 🚀 Features

* Portfolio Management: Track your cryptocurrency assets, including purchased price, quantity, and total value.
* Real-Time Data: Fetch live cryptocurrency prices using the CoinGeck API.
* Future Predictions: Leverage advancd machine learning models (LSTM, GRU, Bi-LSTM) to predictive future prices.
* Customizable Inputs: Input your own purchased prices and quantities for accuraties for accurate portfolio tracking.
