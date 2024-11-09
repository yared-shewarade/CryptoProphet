import axios from 'axios';

const getCurrentPrice = async (cryptoId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
        console.log('API Response:', response.data);
        return response.data[cryptoId]?.usd;
    } catch (error) {
        console.error('API Request Error:', error);
        return null;
    }
};

export default getCurrentPrice;