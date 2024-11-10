# 🔮 CryptoProphet:

# Building a Cryptocurrency Portfolio App with Integrated Crypto Market Predictive Models

# 📘 Project Overview

CryptoProphet is a cryptocurrecy portfolio management app that leverages machine learning models trained on historical data from 30 selected cryptocurrencies. These models (LSTM, GRU, and Bi-LSTM) are used to predict the prices of cryptocurrencies based on their historical performance. The app also provides a suite of portfolio management tools, enabling users to track their investment, calculate profit/loss, and gain valuable insights using real-time data. These models are designed to generalize and predict the prices of any cryptocurrency based on their historical data and trends.

By incorporating the Individualized Model Selection (IMS) Strategy, CryptoProphet ensures that the most accurate model is selected for each cryptocurrency during training, maximizing the reliablity of its price predictions.

### Key features include:

* Model training for 30 cryptocurrencies using LSTM, GRU, and Bi-LSTM models
* Individualized Model Selection (IMS) Strategies to choose the best model for each cryptocurrency
* Price pridiction ofr user input cryptocurrecies
* Comprehensive portfolio management tools, including tracking purchased price, current value, and profit/loss.
* Real-time integration with the CoinGecko API to fetch live prices
* Detailed data analysis with visualizations and performance metrics

# 📂 Repository Structure

CryptoProphet/
├── App/                                                 # Mobile app source code
├── Data/                                                # Cleaned and raw data files
├── Data Analysis/                                  # Analysis and reporting notebooks and visualizations
├── CryptoProphet_Demo.mp4              # Video demo of the app
├── CryptoProphet_Presentation.pdf     # ISCAP conference presentation slides
├── README.md                                    # Main project documentation

## 📂 Key Directories

1. **[App](./App/README.md)**: Contains the source code for the React Native mobile app, backend Flask API, and reusable components.
2. **[Data](./Data/)**: Includes the cleaned and raw CSV files used for training and analysis.
3. **[Data Analysis](./Data%20Analysis/README.md)**: Contains Jupyter notebooks, R scripts, and visualizations for exploratory data analysis and model evaluation.

# ✨ Key Features

##### 1. Cryptocurrency Price Prediction

* Predict the price of cryptocurrencies using models trained on historical data from 30 selected cryptocurrencies
* Models include LSTM, GRU, and Bi-LSTM, chosen specifically for time-series forecasting

#### 2. Portfolio Management

* Add cryptocurrencies with their purchased price and quantity
* View the current value of your portfolio, along with detailed profit/loss calcualtions.

#### 3. Real_Time Data Integration

* fetch live cryptocurrency price using the coinGecko API
* Combine real-time price data with historical trends for enhanced analysis

#### 4. Individualized Model Selection (IMS) Strategy

* Individualized Model Selection, or IMS, is a key innovation in CryptoProphet. Instead of applying a single model or an ensemble across all cryptocurrencis, IMS selects the best-performing model for each cryptocurrency. This approach ensures that each asset benefits from a model tailored to its unique market behavior, leading to more accurate predictions. By integrating IMS, CryptoProphet addresses the dversity of the cryptocurrency market, enhancing its predictive capabilities and user experience.
* IMS is the backbone of CryptoProphet's predictive capabilities. It ensures that each cryptocurrency is treated as a unique asset tailored predictions, making the app more reliable and user-focused.
* **Advantages of IMS**:
  * **Improved Accuracy**: IMS allows the model to adapt to the unique characteristics of each cryptocurrency, leading to higher accuracy compared to generalized approaches.
  * **Computational Efficiency**: Unlike emsemble methods, IMS only uses best model for each asset, reducing computational overhead during prediction.
  * **Adaptability**: As market dynamics change, IMS can be updated by retraining models and re-evaluating their performance.
  * Practical Relevance: For users, IMS ensures that predictions are as accurate as possible, empowering them to make informed investment decisions.

#### 5. Comprehensive Data Analysis

* Include Python and R based tools for **exploratory data analysis (EDA), Preprocessing, model evaluation, predictive analytics, and result visualization,** making it a comprehensive pipeline that supports both understanding and decision-making.

## 📜 Technologies Used

### **Frontend**

- **React Native**: Framework for building the mobile app.
- **Expo**: Simplifies app development and testing.

### **Backend**

- **Flask API**: Lightweight Python framework for serving predictions via an API.
- **CoinGecko API**: Real-time cryptocurrency price data integration.

### **Machine Learning and Artificial Neural Networks**

- **Artificial Neural Networks (ANN)**:
  - Models: LSTM, GRU, Bi-LSTM.
  - Used for time-series forecasting to predict cryptocurrency prices.
- **Machine Learning Techniques**:
  - Data preprocessing: Feature scaling, lag creation (daily, weekly, monthly).
  - Model evaluation using metrics like MAE, RMSE, and R².

### **Tools**

- **Python Libraries**:
  - **Pandas** and **NumPy** for data manipulation and analysis.
  - **Matplotlib** and **Seaborn** for visualization.
- **R**:
  - For generating statistical visualizations like histograms and heatmaps.
- **Jupyter Notebooks**: For data explanation and model evaluation

# **🎥 Video Demo**

[Watch Demo Video of the App](./CryptoProphet_Demo.mp4)

# 📖 Publication

The project paper, **"CryptoProphet: Building a Cryptocurrency Portfolio App with Integrated Market Predictive Models"**, has been presented and published at the **ISCAP Journals**

[ISCAP paper publication](https://iscap.us/proceedings/2024/pdf/6133.pdf)

# 📖 Publication

The project paper, **"CryptoProphet: Building a Cryptocurrency Portfolio App with Integrated Market Predictive Models"**, has been published at the **ISCAP Conference**.

[![ISCAP Logo](## 📖 Publication  The project paper, **"CryptoProphet: Building a Cryptocurrency Portfolio App with Integrated Market Predictive Models"**, has been published at the **ISCAP Conference**. 


## 📖 Publication

The project paper, **"CryptoProphet: Building a Cryptocurrency Portfolio App with Integrated Market Predictive Models"**, has been published at the **ISCAP Conference**.

<img src="https://www.iscap.us/assets/img/iscap-logo-2024.png" alt="ISCAP Logo" width="150"/>`
