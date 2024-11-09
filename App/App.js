import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Dimensions, TextInput, Button, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import getCurrentPrice from './services/coinGeckoService';
import getPrediction from './services/predictService';
import getHistoricalData from './services/historicalDataService';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [cryptoData, setCryptoData] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [newAsset, setNewAsset] = useState('');
  const [newPurchasedPrice, setNewPurchasedPrice] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('bitcoin');
  const [timeRange, setTimeRange] = useState(30);

  useEffect(() => {
    fetchHistoricalData(selectedAsset, timeRange); // Fetch data for the selected time range
  }, [selectedAsset, timeRange]);

  const fetchHistoricalData = async (asset, days) => {
    const data = await getHistoricalData(asset.toLowerCase(), days);
    setHistoricalData(data);
  };

  const handleAssetChange = async (asset, index) => {
    const id = asset.toLowerCase();
    const price = await getCurrentPrice(id);
    const prediction = await getPrediction(id, [price]);
    const cryptoSymbol = await getCryptoSymbol(id);

    setCryptoData((prevData) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        asset: cryptoSymbol,
        cryptoId: id,
        currentPrice: price,
        forecast: prediction,
      },
    }));
  };

  const handlePriceChange = (price, index) => {
    setCryptoData((prevData) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        purchasedPrice: price,
      },
    }));
  };

  const handleQuantityChange = (quantity, index) => {
    setCryptoData((prevData) => ({
      ...prevData,
      [index]: {
        ...prevData[index],
        quantity: quantity,
      },
    }));
  };

  const addCrypto = () => {
    const newIndex = coins.length;
    setCoins([...coins, { id: newIndex + 1, asset: newAsset }]);
    handleAssetChange(newAsset, newIndex);
    handlePriceChange(newPurchasedPrice, newIndex);
    handleQuantityChange(newQuantity, newIndex);
    setNewAsset('');
    setNewPurchasedPrice('');
    setNewQuantity('');
  };

  const deleteCrypto = (index) => {
    if (coins.length > 1) {
      setCoins(coins.filter((_, i) => i !== index));
      setCryptoData((prevData) => {
        const newData = { ...prevData };
        delete newData[index];
        return newData;
      });
    }
  };

  const getCryptoSymbol = async (id) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await response.json();
    return data.symbol.toUpperCase();
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to CryptoProphet!</Text>
        <Text style={styles.subHeaderText}>Real-Time Tracking, Smart Predictions, and Maximum Profits</Text>
        <Text style={styles.chartTitle}>{selectedAsset.charAt(0).toUpperCase() + selectedAsset.slice(1)} Price for the Last {timeRange} Days</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTimeRange(1)}>
            <Text style={styles.buttonText}>1D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTimeRange(7)}>
            <Text style={styles.buttonText}>7D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTimeRange(30)}>
            <Text style={styles.buttonText}>30D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTimeRange(365)}>
            <Text style={styles.buttonText}>1Y</Text>
          </TouchableOpacity>
        </View>
      </View>
      {historicalData.length > 0 && (
        <LineChart
          data={{
            labels: historicalData.map((item) => new Date(item[0]).toLocaleDateString()),
            datasets: [
              {
                data: historicalData.map((item) => item[1]),
                color: () => `rgba(0, 0, 139, 1)`, // Dark blue color for the line without opacity adjustment
                strokeWidth: 2, // Thicker line
              },
            ],
          }}
          width={screenWidth} // Full screen width
          height={220}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#fff', // Light yellow background
            backgroundGradientFrom: '#fff', // Light yellow gradient start
            backgroundGradientTo: '#fff', // Light yellow gradient end
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '0', // Hide dots
            },
            yAxisLabelStyle: {
              fontSize: 10, // Smaller y-axis label
            },
            xAxisLabelStyle: {
              fontSize: 10, // Smaller x-axis label
            },
          }}
          bezier
          withInnerLines={false}
          withOuterLines={false}
          style={{
            marginVertical: 0, // Remove vertical margin
            borderRadius: 16,
          }}
        />
      )}
      <ScrollView horizontal contentContainerStyle={styles.horizontalScrollContainer}>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.headerCell, styles.leftAlign]}>Asset</Text>
            <Text style={[styles.tableHeaderText, styles.headerCell, styles.leftAlign]}>PP</Text>
            <Text style={[styles.tableHeaderText, styles.headerCell, styles.leftAlign]}>QTY</Text>
            <Text style={[styles.tableHeaderText, styles.headerCell, styles.leftAlign]}>TB</Text>
            <Text style={[styles.tableHeaderText, styles.headerCell, styles.leftAlign]}>P/L</Text>
            <Text style={[styles.tableHeaderText, styles.headerCell, styles.leftAlign]}>Forecast</Text>
            <View style={styles.headerCell} />
          </View>
          <ScrollView>
            {coins.map((coin, index) => (
              <View key={coin.id} style={styles.row}>
                <View style={styles.assetCell}>
                  <Text style={[styles.cell, styles.bodyCell, styles.largeText]}>{cryptoData[index]?.asset}</Text>
                  <Text style={[styles.cell, styles.bodyCell, styles.greenText]}>{cryptoData[index]?.currentPrice}</Text>
                </View>
                <Text style={[styles.cell, styles.bodyCell, styles.leftAlign]}>{cryptoData[index]?.purchasedPrice}</Text>
                <Text style={[styles.cell, styles.bodyCell, styles.leftAlign]}>{cryptoData[index]?.quantity}</Text>
                <Text style={[styles.cell, styles.bodyCell, styles.hidden]}>{cryptoData[index]?.currentPrice}</Text>
                <Text style={[styles.cell, styles.bodyCell, styles.leftAlign]}>{(cryptoData[index]?.currentPrice * cryptoData[index]?.quantity).toFixed(2)}</Text>
                <Text style={[styles.cell, styles.bodyCell, { color: (cryptoData[index]?.currentPrice * cryptoData[index]?.quantity - cryptoData[index]?.purchasedPrice * cryptoData[index]?.quantity) >= 0 ? 'green' : 'red' }, styles.leftAlign]}>
                  {(cryptoData[index]?.currentPrice * cryptoData[index]?.quantity - cryptoData[index]?.purchasedPrice * cryptoData[index]?.quantity).toFixed(2)}
                </Text>
                <Text style={[styles.cell, styles.bodyCell, { color: cryptoData[index]?.forecast > cryptoData[index]?.currentPrice ? 'green' : 'red' }, styles.leftAlign]}>
                  {cryptoData[index]?.forecast > cryptoData[index]?.currentPrice ? 'UP' : 'DOWN'}
                </Text>
                <Button title="Delete" onPress={() => deleteCrypto(index)} />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Asset"
          value={newAsset}
          onChangeText={setNewAsset}
        />
        <TextInput
          style={styles.input}
          placeholder="Purchased Price"
          value={newPurchasedPrice}
          onChangeText={setNewPurchasedPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={newQuantity}
          onChangeText={setNewQuantity}
        />
        <Button title="Add" onPress={addCrypto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    //backgroundColor: '#fff9c4', // Light yellow background color
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'normal',
    marginTop: 10,
    color: 'white',
    backgroundColor: "#0080FE",
    fontWeight: 'bold',
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 0,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  horizontalScrollContainer: {
    flexGrow: 1,
    paddingBottom: 15,
  },
  table: {
    flexDirection: 'column',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: '#e0e0e0',
    paddingVertical: 15, // Reduce padding to decrease space between headers
    paddingHorizontal: 15, // Reduce padding to decrease space between headers
  },
  tableHeaderText: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  headerCell: {
    paddingHorizontal: 10, // Reduce padding to decrease space between headers
  },
  leftAlign: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  cell: {
    flex: 1,
    textAlign: 'left',
  },
  bodyCell: {
    paddingHorizontal: 8,
  },
  assetCell: {
    flex: 1,
    textAlign: 'left',
    paddingHorizontal: 8,
  },
  largeText: {
    fontSize: 14,
  },
  greenText: {
    fontSize: 14,
    color: 'darkgreen',
  },
  hidden: {
    display: 'none',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default App;
