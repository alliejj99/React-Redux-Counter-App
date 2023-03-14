import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import counter from "./reducer";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(counter);

const render = () =>
  root.render(
    <React.StrictMode>
      <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </React.StrictMode>
  );
render();
store.subscribe(render);
