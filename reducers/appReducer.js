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

    // case ACTIONS.FOCUS:
    //   return {
    //     ...state,
    //     focus: true,
    //   };

    // case ACTIONS.RESULTS:
    //   return {
    //     ...state,
    //     view: REDUCER_VIEWS.RESULTS,
    //   };

    // case ACTIONS.SET_ERROR:
    //   return {
    //     disabled: false,
    //     submitting: false,
    //     errors: action.errors,
    //   };

    default:
      return REDUCER_INITIAL_STATE;
  }
};
