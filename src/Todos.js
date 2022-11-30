import React from 'react'

const Todos = ({todos, removeTodo, doneTodo}) => {



  return todos.map(todo =>(
    <div className={todo.done ? 'Todo Done' : 'Todo'} key = {todo.id}>
        <span onClick={()=>doneTodo(todo.id)}>{todo.title}</span>
        <i className='fas fa-check' onClick={()=>doneTodo(todo.id)}></i>
        <i className='fas fa-trash' onClick={()=>removeTodo(todo.id)}></i>

    </div>
  ));
}

export default Todos