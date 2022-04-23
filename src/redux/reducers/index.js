import appInitialState from "../app-state/app-initial.state";

import alert from "./alert.reducer";
import canvas from "./canvas.reducer";

export default function reducer(state = appInitialState, action) {
  return {
    alert: alert(state.alert, action),
    canvas: canvas(state.canvas, action),
  };
}
