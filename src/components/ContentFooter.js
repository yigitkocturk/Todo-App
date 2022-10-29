import React from 'react'
import { useTodo } from '../context/TodoContext'

function ContentFooter() {

const {todos,setTodos} = useTodo();

    const clearCompleted = () => {
        setTodos([]);
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length } </strong>
                item{todos.length> 1 && 's' } left
            </span>

        

            <button className="clear-completed" onClick={()=> clearCompleted()} >
                Clear completed
            </button>
        </footer>

  )
}

export default ContentFooter