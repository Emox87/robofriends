import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./reducers";

import "./index.css";
import App from "./containers/App";

const store = createStore(searchRobots);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    (<App />
  </Provider>
);
