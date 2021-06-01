import React,{useState} from 'react'



function Todo() {

    const [todos,setTodos] = useState([])
    const [todoText,setTodoText] = useState('')

    const handleTodoCreate = evt =>{
        evt.preventDefault();
        setTodos([
            ...todos,
            {text:todoText}
            
        ])
        setTodoText('')
        
    }

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit ={handleTodoCreate}>
                <label htmlFor="todoText">What to do</label>
                <input id="todoText" value={todoText} onChange ={e => setTodoText(e.target.value)}/>
                <button onClick ={handleTodoCreate}>Add</button>
            </form>
            <h2>Things Todo</h2>
            <ul>

              {todos.map((todo,idx)=>(
                  <li key = {idx}>{todo.text}</li>
              ))}

            </ul>
            
        </div>
    )
}

export default Todo
