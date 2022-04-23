import { AppInitialState } from "../app-state/app-initial.state";

import alert from "./alert.reducer";

export default function reducer(state = AppInitialState, action: any) {
  return {
    alert: alert(state.alert, action),
  };
}
