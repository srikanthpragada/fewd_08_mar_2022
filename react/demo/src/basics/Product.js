
import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
       <>
          <h2>Name : {this.props.name}</h2>
          <h3>Price :  {this.props.price}</h3>
          <h3>Discount : {this.props.price * 0.20}</h3>
       </>
    )
  }
}
