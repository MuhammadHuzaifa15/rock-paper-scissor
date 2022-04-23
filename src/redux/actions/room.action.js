import ACTIONS from "../constants/types";

export const createRoom = (roomType) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.CREATE_ROOM, roomType });
  };
};
