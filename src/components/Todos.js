import React from 'react'
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core'
import { CloseIcon } from '@material-ui/icons/Close'

const Todos = ({ todo, toggleComplete, removeItem }) => {
    return (
        <ListItem style={{display:'flex',justifyContent:'center'}}>
            <Checkbox
            checked={todo.completed}
            onClick={()=>toggleComplete(todo.id)}
            />
             <Typography
             variant="body1"
             style={{
                 color:'blue',
                 textDecoration:todo.completed ? "line-through":null
             }}
             >{todo.task}</Typography>
            <IconButton onClick={()=>removeItem(todo.id)}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todos
