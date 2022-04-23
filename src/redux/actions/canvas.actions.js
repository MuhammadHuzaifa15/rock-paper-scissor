import ACTIONS from "../constants/types";

export const setDrawings = (drawings) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.IMPORT_DRAWING, drawings });
  };
};

export const addDrawing = (drawing) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.ADD_DRAWING, drawing });
  };
};
