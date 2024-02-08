import React from "react";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add your task"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
