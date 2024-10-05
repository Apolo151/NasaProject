// src/services/nasaPowerService.js
import axios from 'axios';

const NASA_API_URL = 'https://power.larc.nasa.gov/api/temporal/daily/point';

export const getNasaPowerData = async (lat, lon) => {
    try {
        const response = await axios.get(NASA_API_URL, {
            params: {
                parameters: 'ALLSKY_SFC_SW_DWN,T2M,PRECTOT,PS,GWETTOP,GWETPROF,WS2M',
                start: '20240926',
                end: '20241005',
                community: 'ag',
                longitude: lon,
                latitude: lat,
                format: 'JSON'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching NASA POWER data:', error);
        throw error;
    }
};
