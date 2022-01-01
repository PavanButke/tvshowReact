import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_TV_SHOW,
  CLEAR_TV_SHOW,
} from "../types";

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case SET_TV_SHOW:
      return {
        ...state,
        tv_Show: action.payload,
        loading: false,
      };
    case CLEAR_TV_SHOW:
      return {
        ...state,
        tv_Show: {},
      };
    default:
      return state;
  }
};

export default showsReducer;
