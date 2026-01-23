import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todos")
      setTodos(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  const addTodo = async (text) => {
    if (!text) return;
    try {
      const res = await axios.post("http://localhost:5000/todos", { text });
      setTodos([...todos, res.data])
    }
    catch (err) {
      console.log(err);
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
