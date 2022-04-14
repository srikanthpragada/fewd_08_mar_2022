import React, { useContext } from 'react'

const MyContext = React.createContext();

// Parent component 
export default function FunctionDemo() {
    const details = {course : 'React', trainer : 'Srikanth Pragada'}
    return (
        <MyContext.Provider value={details}>
            <h1>Parent Sending Data Using Context</h1>
            <Child />
        </MyContext.Provider>
    )
}

function Child() {
    return (
        <>
            <h2>Child </h2>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    const details = useContext(MyContext)  // useContext hook
    return (
        <>
            <h2>Grand Child </h2>
            <h3>Course : {details.course} </h3>
            <h3>Trainer : {details.trainer} </h3>
        </>
    )
}