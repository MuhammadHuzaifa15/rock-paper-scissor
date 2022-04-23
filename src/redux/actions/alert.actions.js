import ACTIONS from "../constants/types";

export const showAlert = (config) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.SHOW_ALERT, config });
  };
};

export const hideAlert = () => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.HIDE_ALERT });
  };
};
