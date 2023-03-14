import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import rootReducer from "./reducer";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(rootReducer);

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
        />
      </Provider>
    </React.StrictMode>
  );
render();
store.subscribe(render);
