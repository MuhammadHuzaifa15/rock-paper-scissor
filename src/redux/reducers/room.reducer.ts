import { produce } from "immer";
import ACTIONS from "../constants/types";

export interface IRoom {
  roomType: '',
}

const room = produce((draft, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_ROOM:
      draft.roomType = action.roomType;
      return draft;
    default:
      return draft;
  }
});

export default room;
