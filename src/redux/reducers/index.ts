import { AppInitialState } from "../app-state/app-initial.state";

import alert from "./alert.reducer";
import room from "./room.reducer";

export default function reducer(state = AppInitialState, action: any) {
  return {
    alert: alert(state.alert, action),
    room: room(state.room, action),
  };
}
