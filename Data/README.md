# 📂 Data

### *All raw and cleaned data used for analysis and modeling.*

---

## **📘 Overview**

The `Data` folder contains the datasets used for cryptocurrency price predictions, analysis, and visualization. This includes raw datasets, cleaned datasets, and preprocessed files used during model training and evaluation.

---

## **🔑 Key Data Files**

### **1. Raw Data**

- **`crypto_data.csv`**:

  - Description: The original dataset containing cryptocurrency data collected from APIs or other sources.
  - Content:
    - Timestamps (daily records).
    - Prices, volumes, and market capitalization.
    - Data for all 30 selected cryptocurrencies.
- **`crypto_historical_data.csv`**:

  - Description: Historical cryptocurrency data downloaded for extended time periods.
  - Content:
    - Open, High, Low, Close (OHLC) values.
    - Trading volumes.
    - Market capitalization trends.

---

### **2. Cleaned Data**

- **`cleaned_crypto_data.csv`**:

  - Description: Preprocessed data with missing values handled, features engineered, and unnecessary columns removed.
  - Usage:
    - Input for machine learning models.
    - Basis for data analysis and visualizations.
- **`selected_column_data.csv`**:

  - Description: A subset of cleaned data with only the selected features used for training the predictive models.
  - Content:
    - Columns: `Date`, `Crypto_Name`, `Price`, `Volume`, `Market_Cap`, and lagged values.
- **`merged_data.csv`**:

  - Description: Combined dataset including multiple cryptocurrencies, cleaned and aligned by timestamps.
  - Content:
    - Normalized price trends across cryptos.
    - Features like 30-day loopback values for model input.

---

## **🧹 Data Cleaning Process**

The raw data was cleaned using the following steps:

1. **Handling Missing Values**:
   - Removed or imputed missing data points using median/mean for continuous features.
2. **Feature Engineering**:
   - Added lagged features (daily, weekly, monthly).
   - Calculated percentage changes and rolling averages.
3. **Normalization**:
   - Min-Max scaling applied to prices, volumes, and market capitalization to standardize the features.
4. **Filtering Cryptos**:
   - Reduced the dataset to 30 cryptocurrencies based on criteria like trading volume, market capitalization, and data availability.

---

## **🔍 Data Usage**

1. **Raw Data**:

   - Stored as backups for reference and comparison.
   - Used for custom analysis or additional preprocessing if required.
2. **Cleaned Data**:

   - Main input for machine learning models.
   - Used for creating visualizations like correlation matrices and lag plots.
3. **Preprocessed Subsets**:

   - Features like loopback intervals and scaled data were extracted to train predictive models.

---

## **📂 Directory Structure**

```plaintext
Data/
├── crypto_data.csv                  # Raw cryptocurrency dataset
├── crypto_historical_data.csv       # Historical cryptocurrency data
├── cleaned_crypto_data.csv          # Preprocessed dataset
├── selected_column_data.csv         # Subset of data used for model training
├── merged_data.csv                  # Combined and aligned cleaned data
├── pivoted_cleaned_data.csv         # Pivoted dataset for advanced analysis
```

# 🔗 Related Sections

* For detailed data preprocessing steps, refer to** ** **[Data** **Analysis/README.md]()** .

* For model training details, refer to** ** **[App/README.md]()** .

# ⚠️ Notes

* Always use the latest cleaned data (`selected_column_data.csv or cleaned_crypto_data.csv`) for analysis and modeling to ensure consistency.
* Make sure the timestamps are properly aligned when combining data across cryptocurrencies.


---



# 🎥 Demo Video

The following demo showcases the CryptoProphet app in action, including how it handles user inputs, real-time data fetching, and predictive modeling.

<p align="center">
  <video width="640" height="360" controls>
    <source src="https://drive.google.com/uc?id=1AbCdEfGHIjKlmnOPqrStUvWXYz123456" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

[📥 Watch the Demo](https://drive.google.com/file/d/1zsSB-db6ec-ZJmlSocSQ9Neu3KH-j3nk/view?usp=drive_link) [Video](https://drive.google.com/file/d/1zsSB-db6ec-ZJmlSocSQ9Neu3KH-j3nk/view?usp=drive_link)

# 📖 Publication

The project paper, **"CryptoProphet: Building a Cryptocurrency Portfolio App with Integrated Market Predictive Models"**, has been presented and published at the **ISCAP Conference Proceedings**

<a href="https://iscap.us/proceedings/2024/pdf/6133.pdf">
    <img src="https://www.iscap.us/assets/img/iscap-logo-2024.png" alt="ISCAP Logo" width="70" style="vertical-align:middle; margin-right:10px;">
    ISCAP Conference Proceedings
</a>

# **👤 Author**

# **Yared Shewarade**

* **Linkedin**: [yared-shewarade](https://www.linkedin.com/in/yared-shewarade-378aa414b/)

- **Email**: [shewaradeyared@gmail.com](mailto:shewaradeyared@gmail.com)
