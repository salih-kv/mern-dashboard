import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import globalReducer from "./state/index.js";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
