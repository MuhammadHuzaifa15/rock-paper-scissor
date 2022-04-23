export const AppInitialState = {
  alert: {
    config: {},
    isActive: false,
  },
  room: {
    roomType: ''
  }
};

export type IAppInitialState = typeof AppInitialState;
