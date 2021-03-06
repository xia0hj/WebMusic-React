import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";



//import "@assets/css/common.css";
import "./assets/css/common.css";
import App from "@pages/app/index";
import DevTools from "@service/DevTools";
import {store} from "@service/reduxUtils";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <DevTools />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

