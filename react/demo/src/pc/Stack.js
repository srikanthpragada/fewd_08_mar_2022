// Lifting state up 

import React, { useState } from 'react'

export default function Stack() {
    let [titles, setTitles] = useState(["No rules rules", "Outliers"])

    function push(title) {
       setTitles ( [ ...titles, title])
    }

    function pop() {
      let newTitles = [...titles]
      newTitles.pop()
      setTitles(newTitles)
    }

    return (
        <>
            <h1>Stack</h1>
            <PushComponent pushTitle = {push} />
            <PopComponent  popTitle = {pop} />
            <ShowComponent titles = {titles} />
        </>
    )
}

function PushComponent(props) {
    let [title, setTitle] = useState("")

    function changeTitle(event) {
        setTitle(event.target.value)
    }

    function push() {
         props.pushTitle(title)
    }

    return (
        <>
            Title <input type="text" value={title} onChange={changeTitle} />
            <button onClick={push}>Push</button>
        </>

    )
}


function PopComponent(props) {
    function pop() {
        props.popTitle()
    }

    return (
        <>
            <p></p>
            <button onClick={pop}>Pop</button>
            <p></p>
        </>
    )
}


function ShowComponent(props) {
    return (
        <>
            <h2>Titles</h2>
            <ul>
                {props.titles.map( (v,idx) => <li key={idx}>{v}</li>)}
            </ul>
        </>
    )
}