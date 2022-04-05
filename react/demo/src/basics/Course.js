
import React from 'react'

export default function Course() {
    var name = "React"
    var trainer = "Srikanth"
    var topics = ["Components", "Properties", "State Management", "AJAX"]

    return (
        <>
            <h2>Course Title : {name}</h2>
            <h3>Trainer : {trainer}</h3>
            <ListTopics topics = {topics} title="Important Topics"   />
        </>
    )
}

// Function component 
function ListTopics(props) {
    return (
        <>
            <h4>{props.titl}</h4>
            <ul>
                {props.topics.map(t => <li className="text-primary">{t}</li>)}
            </ul>
        </>
    )

}