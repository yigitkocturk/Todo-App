import React from 'react'
import Form from './NewTodoForm'


function Header() {
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <Form/>
            </header></div>
    )
}

export default Header