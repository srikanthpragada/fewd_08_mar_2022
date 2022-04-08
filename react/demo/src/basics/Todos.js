import React, {useState} from 'react'

export default function Todos() {
  let [todos, setTodos] = useState( ['Learn React', 'Develop Todos App'])
  let [todoText, setTodoText] = useState("")

  function changeText(event) {
      //console.log(event)
      setTodoText(event.target.value)
  }

  function addTodo() {
     // todos.push(todoText)
     setTodos( [...todos, todoText] )
  }

  function deleteTodo(idx) {
      let newTodos = todos.filter( (text, index) => index !== idx)
      setTodos(newTodos)
  }

  return (
     <>
     <h1>Todos</h1>
     Todo <input type="text" value={todoText} onChange={changeText} /> 
     <button onClick={addTodo}>Add</button>
     <p></p>
     <ul>
      {
         todos.map( (text,idx) =>
          <li key={idx}>
             {text} 
             <button onClick={ () => deleteTodo(idx)}>Delete</button> 
         </li>)
      }
     </ul>
     </>
  )
}
