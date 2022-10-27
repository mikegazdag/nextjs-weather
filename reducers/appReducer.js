import {
  REDUCER_ACTIONS as ACTIONS,
  REDUCER_INITIAL_STATE,
  REDUCER_VIEWS as VIEWS,
} from '@/utils/constants';

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SUBMITTING:
      return {
        submitting: true,
        disabled: true,
        errors: null,
      };

    case ACTIONS.RESET:
      return {
        ...REDUCER_INITIAL_STATE,
      };

    case ACTIONS.RESULTS:
      return {
        submitting: false,
        disabled: false,
        view: VIEWS.RESULTS,
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: state.error,
      };

    default:
      return REDUCER_INITIAL_STATE;
  }
};
