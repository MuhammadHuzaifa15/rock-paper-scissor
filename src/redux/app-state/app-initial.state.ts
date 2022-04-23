export const AppInitialState = {
  alert: {
    config: {},
    isActive: false,
  },
  room: {
    type: ''
  }
};

export type IAppInitialState = typeof AppInitialState;
