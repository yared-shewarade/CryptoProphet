# load necessary packages
install.packages(c("dplyr", "tidyr", "corrplot", "RColorBrewer", "ggplot2", "forecast", "zoo"))

library(dplyr)
library(tidyr)
library(corrplot)
library(RColorBrewer)
library(ggplot2)
library(forecast)
library(zoo)
library(readr)
library(ggplot2)
library(DT)

# Read csv file
data <- read_csv("../selected_column_data.csv")
datatable(data)

predictions_df <- read_csv("../crypto_predictions_2.csv")
predictions_df

# Predicted vs Actual Prices
# Predicted vs Actual Prices for each cryptocurrency
plot_pred_vs_actual <- function(predictions_df) {
  plots <- list()
  
  cryptos <- unique(predictions_df$crypto)
  
  for (crypto in cryptos) {
    crypto_data <- predictions_df %>% filter(crypto == crypto)
    plot <- ggplot(crypto_data, aes(x = c("Actual", "Predicted"), y = c(crypto_data$actual_price, crypto_data$predicted_price))) +
      geom_line(aes(group = 1)) + 
      geom_point(size = 4) +
      ggtitle(paste("Predicted vs Actual Prices for", crypto)) +
      ylab("Price") +
      theme_minimal()
    
    plots[[crypto]] <- plot
  }
  
  return(plots)
}

plots <- plot_pred_vs_actual(predictions_df)

# Print plots (use print in RStudio)
for (plot in plots) {
  print(plot)
}
predictions_df
merged_df <- read_csv("../merged_data.csv")
merged_df
View(merged_df)
#-----------------------------------------
# Load necessary libraries
library(ggplot2)
library(dplyr)
library(tidyr)
library(zoo)
library(reshape2)
library(corrplot)
library(RColorBrewer)

# Ensure the 'Date' column is in Date format
data$Date <- as.Date(data$Date)

# 1. Statistical Analysis

# Check column names
if (!all(c("Crypto", "Close") %in% colnames(data))) {
  stop("The required columns 'Crypto' and 'Close' do not exist in the dataset.")
}

# 1. Statistical Analysis

# Summary statistics
summary_stats <- data %>%
  dplyr::group_by(Symbol) %>%
  dplyr::summarise(
    mean = mean(Close, na.rm = TRUE),
    median = median(Close, na.rm = TRUE),
    sd = sd(Close, na.rm = TRUE),
    var = var(Close, na.rm = TRUE)
  )
print(summary_stats)

# Visualization: Box Plot
ggplot(data, aes(x = Symbol, y = Close)) + 
  geom_boxplot() + 
  ggtitle("Box Plot of Cryptocurrency Prices") +
  theme(axis.text.x = element_text(angle = 90, hjust = 1))

# Visualization: Histogram
ggplot(data, aes(x = Close)) + 
  geom_histogram(bins = 50) + 
  facet_wrap(~ Symbol, scales = "free_x") + 
  ggtitle("Histogram of Cryptocurrency Prices") +
  xlab("Price") + ylab("Frequency")

# 2. TIme Series Analysis

# Install and load required packages
install.packages(c("dplyr", "zoo", "ggplot2"))

library(dplyr)
library(zoo)
library(ggplot2)

# Moving Average
data <- data %>%
  dplyr::group_by(Symbol) %>%
  dplyr::arrange(Date) %>%
  dplyr::mutate(Close_MA = zoo::rollmean(Close, 7, fill = NA))

# Visualization: Line Chart
ggplot(data, aes(x = Date, y = Close, color = "Actual Price")) + 
  geom_line() + 
  geom_line(aes(y = Close_MA, color = "7-Day Moving Average")) + 
  facet_wrap(~ Symbol, scales = "free_y") + 
  ggtitle("Time Series of Cryptocurrency Prices") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# 3. Correlation Analysis

# Pivoting data for correlation
correlation_data <- data %>%
  select(Date, Symbol, Close) %>%
  tidyr::spread(Symbol, Close)

# Calculate correlation matrix
correlation_matrix <- cor(correlation_data[,-1], use = "complete.obs")

# Visualization: Heatmap
corrplot(correlation_matrix, method = "color", type = "upper", 
         col = brewer.pal(n = 8, name = "RdYlBu"), addCoef.col = "black", 
         tl.cex = 0.8, number.cex = 0.7, tl.srt = 45)

# 4. Lag Analysis

# Daily Lag Plot
ggplot(data, aes(x = dplyr::lag(Close, 1), y = Close)) + 
  geom_point(alpha = 0.5) + 
  facet_wrap(~ Symbol, scales = "free") + 
  ggtitle("Lag Plot of Daily Cryptocurrency Prices") +
  xlab("Lagged Close") + ylab("Close")

# Autocorrelation Plot
for(crypto in unique(data$Symbol)) {
  crypto_data <- data %>% filter(Symbol == crypto)
  autoplot(acf(crypto_data$Close, na.action = na.pass)) + 
    ggtitle(paste("Autocorrelation Plot of", crypto, "Prices"))
}

# 5. Volatility Analysis

# Calculate daily returns
data <- data %>%
  group_by(Symbol) %>%
  mutate(Daily_Return = (Close / lag(Close) - 1))

# Calculate rolling volatility (standard deviation of returns)
data <- data %>%
  group_by(Symbol) %>%
  mutate(Volatility = zoo::rollapply(Daily_Return, 30, sd, fill = NA))

# Visualization: Volatility over time
ggplot(data, aes(x = Date, y = Volatility)) + 
  geom_line() + 
  facet_wrap(~ Symbol, scales = "free_y") + 
  ggtitle("30-Day Rolling Volatility of Cryptocurrency Prices") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# 6. Price Change Analysis

# Calculate price changes
data <- data %>%
  group_by(Symbol) %>%
  mutate(Price_Change = Close - lag(Close))

# Visualization: Price changes over time
ggplot(data, aes(x = Date, y = Price_Change)) + 
  geom_line() + 
  facet_wrap(~ Symbol, scales = "free_y") + 
  ggtitle("Daily Price Changes of Cryptocurrencies") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# 7. Summary Statistics of Returns

# Summary statistics for returns
summary_returns <- data %>%
  group_by(Symbol) %>%
  summarise(across(Daily_Return, list(mean = mean, median = median, sd = sd, var = var), na.rm = TRUE))
print(summary_returns)

# Reshape for heatmap
summary_returns_long <- reshape2::melt(summary_returns, id = "Symbol")

# Visualization: Heatmap
ggplot(summary_returns_long, aes(x = Symbol, y = variable, fill = value)) + 
  geom_tile() + 
  geom_text(aes(label = round(value, 2))) + 
  scale_fill_gradient(low = "white", high = "blue") + 
  ggtitle("Summary Statistics of Daily Returns for Cryptocurrencies") +
  theme(axis.text.x = element_text(angle = 90, hjust = 1))

# 8. Rolling Mean and Standard Deviation

# Calculate rolling mean and standard deviation
data <- data %>%
  group_by(Symbol) %>%
  mutate(Rolling_Mean = zoo::rollmean(Close, 30, fill = NA),
         Rolling_Std = zoo::rollapply(Close, 30, sd, fill = NA))

# Visualization: Rolling Mean and Standard Deviation
ggplot(data, aes(x = Date)) + 
  geom_line(aes(y = Close, color = "Actual Price")) + 
  geom_line(aes(y = Rolling_Mean, color = "30-Day Rolling Mean")) + 
  geom_line(aes(y = Rolling_Std, color = "30-Day Rolling Std Dev")) + 
  facet_wrap(~ Symbol, scales = "free_y", ncol = 3) +  # Adjust ncol to reduce rows and increase plot size
  ggtitle("Rolling Mean and Standard Deviation of Cryptocurrency Prices") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1, size = 8)) +  # Adjust text size for readability
  labs(color = "Legend")  # Improve legend title
