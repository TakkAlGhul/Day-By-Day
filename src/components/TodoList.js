import React from 'react'
import TodoSum from './TodoSum'

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      { todos && todos.map(todo => {
        return (
          <TodoSum todo={todo} key={todo.id} />
        )
      })}
    </div>
  )
}
export default TodoList;
