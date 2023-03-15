import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchPost } from "./action/post";
import { RootState } from "./reducer";

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = ({ value, onIncrement, onDecrement }: Props) => {
  const dispatch = useDispatch();
  const counters = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todo);
  const posts: Post[] = useSelector((state: RootState) => state.post);

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

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className="App">
      <span>Clicked: {counters} times </span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
