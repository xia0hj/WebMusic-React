import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";



import "./assets/css/common.css";
import App from "./pages/home/index";
import DevTools from "./service/DevTools";
import store from "./service/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <DevTools />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

