import axios from 'axios';

const getHistoricalData = async (cryptoId, days) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`, {
            params: {
                vs_currency: 'usd',
                days: days,
            },
        });
        return response.data.prices;
    } catch (error) {
        console.error('Error fetching historical data', error);
        return [];
    }
};

export default getHistoricalData;