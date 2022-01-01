import { SET_ALERT, REMOVE_ALERT } from "../types";

const alertsReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertsReducer;
