import React from 'react'

export default function UncontrolledDemo() {
  let title = React.createRef() 

  function process() {
       console.log(title.current.value)
  }  
  return (
      <>
    <h2>UncontrolledDemo</h2>
    Title <input type="text"  ref={title} />
    <button onClick={process}>Process</button>
    </>    

  )
}
