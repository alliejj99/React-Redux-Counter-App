import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { RootState } from "./reducer";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

const App = ({ value, onIncrement, onDecrement }: Props) => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter);
  const todos = useSelector((state: RootState) => state.todo);

  const [todoValue, setTodoValue] = useState("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }, []);

  const addTodo = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTodoValue("");
      dispatch({ type: "ADD_TODO", text: todoValue });
    },
    [dispatch, todoValue]
  );

  const fetchPost = useCallback((): any => {
    return async function fetchPostThunk(dispatch: any, getState: any) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_POSTS", payload: response.data });
    };
  }, []);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch, fetchPost]);

  return (
    <div className="App">
      <span>Clicked: {counters} times </span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {(todos as Array<string>).map((item: any, index: any) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
