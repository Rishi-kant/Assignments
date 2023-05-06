

import React,{useState} from 'react'
import './App.css'
function RemConverter() {
    const[rem,setrem]=useState('')
    const[value,setValue]=useState('')

    const handleChange=(e)=>{
         setValue(e.target.value)
    }
      const handleClick=()=>{
        let res=value/16
        setrem(res)
        setValue('')
      }
  return (
    <div className='container'>
        <div>
            <h1>Pixel To Rem</h1>
        </div>
        <div>
            <label htmlFor="">Px :-</label>
            <input type="number" 
               onChange={handleChange}
            />
          <button
          onClick={handleClick}
          >Convert</button>
        </div>
        <div>
            <h1>Ans :-{rem}</h1>
            
        </div>
    </div>
  )
}

export default RemConverter