import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// 미들웨어 기본 구조 설정
const loggerMiddleWare = (store: any) => (next: any) => (action: any) => {
  console.log("store:", store);
  console.log("action:", action);

  next(action); // => 다음 미들웨어로 넘기는데 다음이 없으면 끝.
};
const middleware = applyMiddleware(loggerMiddleWare);

// 스토어 및 미들웨어 생성
const store = createStore(rootReducer, middleware);

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
