import mapValues from "lodash/mapValues";

const ACTIONS = {
  ADD_DRAWING: null,
  IMPORT_DRAWING: null,

  SHOW_ALERT:null,
  HIDE_ALERT:null,
};

export default mapValues(ACTIONS, (v, k) => k);
