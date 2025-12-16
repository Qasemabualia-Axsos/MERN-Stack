import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task, completed) => {
    setTodos([
      ...todos,
      { id: Date.now(), task: task, completed: completed, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
  <div className="TodoApp">
    <Form addTodo={addTodo} />
    {todos.map((todo) => (
      <Result
        task={todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    ))}
  </div>
  );
};

export default App;
