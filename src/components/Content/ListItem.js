import React from 'react'
import { useTodo } from '../../context/TodoContext'

function ListItem({todo}) {

  const {toggleTodo, onDestroy} = useTodo();


  const onChange = (id) => {
    toggleTodo(id);
  }

  

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                 <div className="view">
                     <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>onChange(todo.id)}/>
                     <label>{todo.text}</label>
                     <button className="destroy" onClick={() => onDestroy(todo.id)} ></button>
                 </div>
             </li>
  )
}

export default ListItem