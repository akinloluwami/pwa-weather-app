import axios from 'axois'


const API = 'https://openweathermap.org/data/2.5/weather'
const API_KEY = '60143b0f6b743491bfc4ae2161177145'
export const fetchWeather = async (query) => {
    const {data} = await axios.get(API, {
        params: {
            q: query,
            unit: 'metric',
            APPID: API_KEY,
        }
    });

    return data
}