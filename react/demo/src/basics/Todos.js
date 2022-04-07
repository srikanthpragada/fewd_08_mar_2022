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

  return (
     <>
     <h1>Todos</h1>
     Todo <input type="text" value={todoText} onChange={changeText} /> 
     <button onClick={addTodo}>Add</button>
     <p></p>
     <ul>
      {
         todos.map( text => <li>{text}</li>)
      }
     </ul>
     </>
  )
}
