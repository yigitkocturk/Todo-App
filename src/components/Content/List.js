
import React from 'react'
import { useTodo } from '../../context/TodoContext'
import ListItem from './ListItem';




function List() {

    const { todos} = useTodo();

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <ListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default List