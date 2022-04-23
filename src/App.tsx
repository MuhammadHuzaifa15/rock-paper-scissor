import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "./redux/store/createStore";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
