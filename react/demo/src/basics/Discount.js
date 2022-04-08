import React, {useState} from 'react'

export default function Discount() {
  let [data, setData] = useState( { price :'', disRate : '', discount : 0})

  function changeValue(event) {
     let cname = event.target.name 
     let value = event.target.value
     setData( {...data, [cname] : value} )
     // console.log(data)
  }

  function calculateDiscount(event) {
       let discount = data.price * data.disRate / 100;
       setData( {...data, discount : discount})
       event.preventDefault();
  }

  return (
     <form onSubmit={calculateDiscount}>
       <h2>Discount Calculation</h2>
       Price <br/>
       <input type="number" value={data.price}
             onChange={changeValue} name="price" required />
       <p></p>
       Discount Rate <br/>
       <input type="number" value={data.disRate} 
             onChange={changeValue} name="disRate" required />
       <p></p>
       <button>Calcuate</button>
       { data.discount > 0 ? <h3>Discount = {data.discount}</h3> : ''}
     </form>
     
  )
}
