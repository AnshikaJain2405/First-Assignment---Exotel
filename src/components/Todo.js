import React from 'react'

function Todo({tasks, deleteTodo, editTodo}) {
  return (
    <div className='Todo'>
        <p>{tasks.task}</p>
        <div>
            <button className="todo-btn" onClick={() => editTodo(tasks.id) }> Edit </button>
            <button className="todo-btn" onClick={() => deleteTodo(tasks.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Todo
