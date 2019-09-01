import React from 'react'

const TodoSum = ({todo}) => {
  return (
    <div className="card green darken-1">
      <div className="card-content white-text">
        <span className="card-title bold">{todo.title}</span>
        <p>{todo.content}</p>
      </div>
    </div>
  )
};

export default TodoSum;
