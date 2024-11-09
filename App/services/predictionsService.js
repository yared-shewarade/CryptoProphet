import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import * as Papa from 'papaparse';

const getPredictions = async () => {
    try {
        const response = await axios.get('http://localhost:5001/predictions');
        const csvContent = response.data;
        const parsedData = Papa.parse(csvContent, { header: true }).data;
        return parsedData;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default getPredictions;