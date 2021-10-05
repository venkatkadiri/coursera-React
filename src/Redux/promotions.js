import * as ActionTypes from "./ActionTypes";
export const Promotions = (
  state = {
    errMess: null,
    promos: [],
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.PROMOS_LOADING:
      console.log("inside the promos loading reducer case");
      return { ...state, isLoading: true, errMess: null, promos: [] };

    case ActionTypes.ADD_PROMOS:
      return { ...state, errMess: null, promos: action.payload };

    case ActionTypes.PROMOS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
