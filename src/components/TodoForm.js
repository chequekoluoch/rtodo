import React, {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { Button, TextField } from '@material-ui/core'

const TodoForm = ({addTodo}) => {
    const [todo, setTodo]=useState({
        id:"",
        task:"",
        completed:false  
     })
    
    const handleChange=e=>{
     setTodo({...todo, task:e.target.value})
    }

    const handleSubmit=e=>{
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({...todo, id: uuid()});
            //reset task input
            setTodo({ ...todo, task: ""})
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <TextField 
        name="task"
        type="text"
        value={todo.task}
        onChange={handleChange}/>
        <Button>Submit</Button>   
        </form>
    )
}

export default TodoForm
