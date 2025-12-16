import { useState } from "react";

const Todo = () => {
  const [work, setWork] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (work === "") {
      alert("Please add a todo");
      return;
    }

    setTodos([...todos, { text: work, done: false }]);
    setWork("");
  };

  const toggleDone = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <button>Add</button>
      </form>

      {todos.map((todo, index) => (
        <div key={index} style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <p style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
          </p>

          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleDone(index)}
          />

          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
