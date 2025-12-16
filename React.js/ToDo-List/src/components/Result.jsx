import React from 'react';

const Result = ({ task, deleteTodo, toggleCompleted }) => {
  return (
    <div className="Todo">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.task}
      </p>
      <button style={{backgroundColor:"black"}} onClick={() => deleteTodo(task.id)}>Delete</button>
    </div>
  );
};

export default Result;
