import axios from "../../node_modules/axios";

const API =
  "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "152832b4863cc656532681292c7cb78e";
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
