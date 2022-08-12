import axios from 'axios';

export function useCityQuery() {
  const getCity = async ({ city }) => {
    if (!city) throw new Error('City must be provided');

    return await axios
      .get(`/api/cities/${city}`)
      .then(response => response.data);
  };

  return {
    getCity,
  };
}
