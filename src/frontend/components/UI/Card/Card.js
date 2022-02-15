import React from 'react'
import './card.css'


const Card = (props) => {
  return (
    <>
    <div class="w-1/3 h-96 border rounded-lg bg-zinc-50 ml-6 mt-6 inline-block">
    <img class="rounded-lg w-full h-5/6" src={props.image} /> 
      <h1 className='mthelper'> {props.title} </h1>
    
    
    
    
    
    
    
    </div>
    </>
  )
}

export default Card