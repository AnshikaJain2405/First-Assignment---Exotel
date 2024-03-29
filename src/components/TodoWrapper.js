import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

function TodoWrapper() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), task: todo, isEditing: false }]);
    console.log(todos);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteAll(){
    setTodos([]);
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  function editTask(task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1>Your TO-DO List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            tasks={todo}
            key={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
      <button className="todo-btn" onClick={deleteAll}>Delete All</button>
    </div>
  );
}

export default TodoWrapper;
