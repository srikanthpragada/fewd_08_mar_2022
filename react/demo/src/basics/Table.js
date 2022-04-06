
import React from 'react'
import PropTypes from 'prop-types';

export default function Table(props) {
  let num = props.number
  let length = props.length ? props.length : 10 

  let a = []
  for (let i = 1; i <= length ; i ++)
      a.push(i)

  return (
    <>
      <h1>Table</h1>
      <table className="table table-bordered">
          <thead>
              <tr>
                  <th>Number</th>
                  <th>Mulitiplier</th>
                  <th>Result</th>
              </tr>
          </thead>
          <tbody>
            { a.map( v => <tr key={v}><td>{num}</td><td>{v}</td><td>{num * v}</td></tr>)}
          </tbody>
      </table>
    </>  
    
  )
}
 
Table.propTypes = {
    number : PropTypes.number,
    length : PropTypes.number
};