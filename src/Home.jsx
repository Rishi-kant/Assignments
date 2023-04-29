

import React from 'react'

const Home = () => {
  const buttons=["A","B","C","D","E","f","G","H","I","J","K","L","M","N","O","P","Q"]

  function handleClick(index){

  }
  return (
    <div>
    {
      buttons.map((btn,index)=>{
        return(
          <span key={index}> 
          <button onClick={()=>handleClick(index)}>{btn}</button>
          </span>
        )
      })
    }
    </div>
  )
}

export default Home

