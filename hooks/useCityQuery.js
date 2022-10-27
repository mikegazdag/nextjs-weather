import axios from 'axios';

import { useApp } from '@/contexts/AppContext';
import { REDUCER_ACTIONS } from '@/utils/constants';

export function useCityQuery() {
  const { setQueryResults, appDispatch } = useApp();
  const findCity = async query => {
    if (!query) throw new Error('City must be provided');

    try {
      const response = await axios.get(`/api/cities/${query}`);

      if (!response?.data?.length) return null;

      switch (response.status) {
        case 202:
          setQueryResults(response?.data);
          appDispatch({ type: REDUCER_ACTIONS.RESULTS });

          break;

        case 404:
          appDispatch({
            type: REDUCER_ACTIONS.SET_ERROR,
            errors: 'Missing',
          });
          break;

        default:
          return appDispatch({ type: REDUCER_ACTIONS.RESET });
      }

      // return data;
    } catch (error) {
      console.error('error fetching city query');
    }
  };

  return {
    findCity,
  };
}
