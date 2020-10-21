import React from 'react'
import Todos from './Todos'
import { List } from '@material-ui/core'
const TodoList = ({ todos, toggleComplete,removeItem }) => {


    return (
      <List>
          {todos.map(todo=>(
              <Todos  key={todo.id} todo={todo} toggleComplete={toggleComplete}  removeItem={removeItem}/>
          ))}
      </List>
    )
}

export default TodoList
