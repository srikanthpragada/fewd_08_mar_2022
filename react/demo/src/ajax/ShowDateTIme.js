import React, {useState, useEffect} from 'react'
import $ from 'jquery';

export default function ShowDateTIme() {
  let [time, setTime] = useState("") 

  useEffect( 
      function() {
         console.log("useEffect()")
         getTime();
      }, []
  )


  function getTime() {
         $.get("http://worldclockapi.com/api/json/utc/now", 
              function (response) {
                   setTime(response.currentDateTime)
              }
         ) 
  }

  return (
     <>
     <button onClick={getTime}>Get date time</button>
     <h1> {time} </h1>
     </>
  )
}
