import mapValues from "lodash/mapValues";

const ACTIONS = {
  SHOW_ALERT: null,
  HIDE_ALERT: null,
};

export default mapValues(ACTIONS, (_v: string, k: string) => k);
