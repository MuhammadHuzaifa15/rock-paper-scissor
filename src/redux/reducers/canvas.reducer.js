import { produce } from "immer";
import ACTIONS from "../constants/types";

const canvas = produce((draft, action) => {
  switch (action.type) {
    case ACTIONS.IMPORT_DRAWING:
      draft.drawings = action.drawings;
      return draft;
    case ACTIONS.ADD_DRAWING:
      draft.drawings.push({ points: action.drawing, key: Date.now() });
      return draft;
    default:
      return draft;
  }
});

export default canvas;
