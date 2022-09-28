import axios from 'axios';

export function useCityQuery() {
  const findCity = async query => {
    if (!query) throw new Error('City must be provided');

    try {
      const response = await axios.get(`/api/cities/${query}`);
      const { data } = response;

      return data;
    } catch (error) {
      console.error('error fetching city query');
    }
  };

  return {
    findCity,
  };
}
