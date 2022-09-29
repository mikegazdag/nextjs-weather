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
        view: VIEWS.INPUT,
      };

    case ACTIONS.RESULTS:
      return {
        submitting: false,
        disabled: false,
        view: VIEWS.RESULTS,
      };

    default:
      return REDUCER_INITIAL_STATE;
  }
};
