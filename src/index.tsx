import "ress";
import "./style.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
