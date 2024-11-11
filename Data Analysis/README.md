# 📊 Data Analysis

## Detailed analysis of cryptocurrency data for exploratory insights and machine learning model evaluation

# 📘 Overview

The Data Analysis folder contains scripts and visualizations used to analyze and preprocess cryptocurrency data.

This includes:

* Exploratory Data Analysis (EDA) to uncover patterns and trends.
* Data preprocessing for feature engineering and cleaning
* Visualization of key insights to guide predictive modeling

These scripts provide the foundation for training and evaluating machine learning models in the CryptoProphet project.

## Exploratory and predictive analysis of cryptocurrency data.

1. **Lag Plots**

Lag plots were created to identify temporal dependencies in the data. Below is an example of lag plots for daily, weekly, and monthly intervals. These plots demonstrate how price values are correlated across different time lags, which informed feature engineering for model training.

![Lag Plots](../images/lag_plots.jpeg)

2. **Correlation Matrix**

The correlation matrix shows the relationships between key features such as prices, volumes, and market capitalization across different cryptocurrencies. Strong correlations between certain variables guided feature selection for the predictive models.

![Correlation Matrix](../images/correlation_matrix.jpeg)

3. **Model Performance Metrics**

The performance of LSTM, GRU, and Bi-LSTM models was evaluated across all 30 cryptocurrencies. The table below highlights key metrics like MAE, MSE, RMSE, MAPE (%), and R² for each crypto and model type.

![Model Performance](../images/model_performance_metrics.jpeg)

4. 3D Scatter Plots**

3D scatter plots visualize the relationships between volume, market cap, and price for cryptocurrencies like BTC and ETH. These visualizations provide insights into how different factors interact.

![3D Scatter Plots](../images/3d_scatter_plots.jpeg)

5. **Cryptocurrency Selection**

The 30 selected cryptocurrencies were chosen based on criteria such as market capitalization, data availability, and trading volume. Below is a table summarizing the selected cryptos.

![Cryptocurrency Selection](../images/crypto_selection_table.jpeg)

6. **Model Performance Metrics**

The performance of different machine learning models (LSTM, GRU, Bi-LSTM) was evaluated across the selected 30 cryptocurrencies. The table below highlights key metrics like **Mean Absolute Error (MAE)**, **Mean Squared Error (MSE)**, **Root Mean Squared Error (RMSE)**, **Mean Absolute Percentage Error (MAPE %)**, and **R² Score**.

![Model Performance Metrics](../images/model_performance_table.jpeg)

7. **Actual vs Predicted Price**

Below is an example of actual vs. predicted price plots for selected cryptocurrencies, showcasing how closely the models predicted future values.

![Actual vs Predicted Price - BTC](images/Bitcoin(BTC)_graph.jpeg)
![Actual vs Predicted Price - CRO](images/Cronos(CRO)_graph.jpeg)
![Actual vs Predicted Price - FTM](images/FantomFTM)_graph.jpeg)
![Actual vs Predicted Price - XLM](images/Solana(SOL)_graph.jpeg)
![Actual vs Predicted Price - SOL](images/Stellar(XLM)_graph.jpeg)

### **Key Observations**

1. **Top Performing Models**:

   - **GRU** consistently performed better for many cryptocurrencies, achieving high **R² values** and low errors.
   - Cryptos like **BTC** and **ETH** showed high predictive accuracy with GRU.
2. **Model Suitability**:

   - Cryptos with high volatility (e.g., **SHIB**, **DOGE**) had slightly higher errors due to unpredictable trends.
3. **MAPE Insights**:

   - Most cryptos have MAPE below 5%, indicating excellent predictive performance.

For detailed metrics and insights, refer to the **[Python notebook](Python/Data_Analysis_and_Reporting.ipynb)**.

## **📜 Links to Detailed Notebooks**

Explore the detailed analysis and notebooks:

- **[Data_Analysis_and_Reporting.ipynb](Python/Data_Analysis_and_Reporting.ipynb)**: Comprehensive Python-based EDA.
- **[Data_Collection_Clean.ipynb](Python/Data_Collection_Clean.ipynb)**: Data cleaning and preprocessing scripts.

---

### **Key Notes**

- **Image Storage**:
  - Place all images in a folder like `Data Analysis/images/` and reference them with relative paths.
- **Keep Explanations Concise**:
  - Provide short, insightful comments for each plot and link to the full notebooks for deeper analysis.

---

Let me know if you'd like further assistance or feedback on organizing the content! 😊

## 📂 Directory Structure

```plaintext
Data Analysis/
├── Python/
│   ├── Data_Analysis_and_Reporting.ipynb   # Comprehensive EDA and reporting in Python
│   ├── Data_Collection_Clean.ipynb         # Data cleaning and preprocessing script
├── R/
│   ├── Heatmap.png                         # Correlation matrix visualization
│   ├── Histogram.png                       # Distribution of key variables
│   ├── TimeSeriesPlot.png                  # Cryptocurrency trends over time
├── README.md                               # Documentation for the Data Analysis folder
```

# 🔍 Key Scripts

### Python Scripts

- Data_Analysis_and_Reporting.ipynb
  - Performs compehensive EDA, including
    - Descriptive statistics
    - Visualization of distributions, trends, and correlations
  - Generates reports to guide model trianing
- Data_Collection_clean.ipynb
  - Cleans raww data for training and analysis
  - Includes feature engineering (e.g., legged values, moving averages)

## 📊 Insights Provided

The scripts and visualizations in this folder aim to:

* Uncover patterns and trends in cryptocurrency data
* Identify correlations and distributions for future selection
* Generate actionable insights to guide model training and evaluation
