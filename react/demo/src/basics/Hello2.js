import React, { Component } from 'react'

export default class Hello2 extends Component {

    constructor() {
        super()
        this.name = "Srikanth"
        this.message = "Good Evening"
        var hours = new Date().getHours()
        if (hours < 12)
            this.message = "Good Morning"
        else
            if (hours < 17)
                this.message = "Good Afternoon"
    }

    render() {
        return (
            <div>{this.message}!!! This is class component by {this.name}</div>
        )
    }
}
