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

store.dispatch({
  type: "ADD_TODO",
  text: "USE REDUX",
});

console.log("store.getState:", store.getState());

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
