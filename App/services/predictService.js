import axios from 'axios';

const getPrediction = async (crypto, recentData) => {
    try {
        const response = await axios.post('http://localhost:5001/predict', {
            crypto: crypto,
            recent_data: recentData
        });
        return response.data.prediction;
    } catch (error) {
        console.error('Prediction Request Error:', error);
        return null;
    }
};

export default getPrediction;