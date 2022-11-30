import React from 'react'
import { useState } from 'react'
import Todos from './Todos';
import AddTodo from './AddTodo';

const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{
    if(!todo.title) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  }

  const removeTodo = id =>{
    const newTodos = todos.filter(todo=> todo.id !== id);
    setTodos(newTodos);
  }

  const doneTodo = id =>{
    let newTodos = todos.map(todo=>{
      if(todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div className='App'>
      <AddTodo addTodo = {addTodo}/>
      <Todos 
          todos = {todos}
          removeTodo = {removeTodo}
          doneTodo = {doneTodo}
          />
    </div>
  )
}

export default App