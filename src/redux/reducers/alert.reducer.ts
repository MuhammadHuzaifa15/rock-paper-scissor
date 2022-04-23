import { produce } from "immer";
import ACTIONS from "../constants/types";

export interface IAlert {
  config: {},
  isActive: false,
}

const alert = produce((draft, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALERT:
      draft.config = action.config;
      draft.isActive = true;
      return draft;
    case ACTIONS.HIDE_ALERT:
      draft.config = {};
      draft.isActive = false;
      return draft;
    default:
      return draft;
  }
});

export default alert;
