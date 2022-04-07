import React, {useState} from 'react'

export default function Counter() {
  let [value, setValue] = useState(0)    // useState() hook 

  function increment() {
     setValue( value + 1) // change state 
     console.log(value)
  }

  function decrement() {
    setValue( value - 1) // change state 
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={increment}>Increment</button> 
      &nbsp;
      <button onClick={decrement}>Decrement</button>
    </>
  )
}
