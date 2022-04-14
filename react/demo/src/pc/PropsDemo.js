import React from 'react'
// Parent component 
export default function PropsDemo() {
    const details = {course : 'React', trainer : 'Srikanth Pragada'}
    return (
        <>
            <h1>Parent Sending Data Using Props</h1>
            <Child  details = {details}/>
        </>
    )
}

function Child(props) {
    return (
        <>
            <h2>Child </h2>
            <GrandChild details={props.details} />
        </>
    )
}

function GrandChild(props) {
    return (
        <>
            <h2>Grand Child </h2>
            <h3>Course : {props.details.course} </h3>
            <h3>Trainer : {props.details.trainer} </h3>
        </>
    )
}