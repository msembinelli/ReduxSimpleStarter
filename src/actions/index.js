import axios from 'axios';

const API_KEY = 'bde2ded5a1766a2b39453d472b54c024';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
 const url = `${ROOT_URL}&q=${city},CAN`;
 const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
