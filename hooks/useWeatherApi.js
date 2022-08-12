import axios from 'axios';

const weatherApi = axios.create({
  baseURL: '',
  withCredentials: true,
});

export default function useWeatherApi() {
  const getForecast = async ({ lat, lon }) => {
    return weatherApi
      .post('/someQuery', {
        lat,
        lon,
      })
      .then(response => response.data);
  };

  return {
    getForecast,
  };
}
