import axios from "../../node_modules/axios";

const API =
  "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "60143b0f6b743491bfc4ae2161177145";
export const fetchWeather = async (query) => {
  const { data } = await axios.get(API, {
    params: {
      q: query,
      unit: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};
