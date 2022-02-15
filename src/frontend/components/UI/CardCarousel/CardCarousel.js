import React from 'react'
import './cardcarousel.css'

const CardCarousel = (props) => {
  return (
    <>
    <div class="w-1/3 h-96 border rounded-lg bg-zinc-50 ml-6 mt-6 inline-block">
    <img class="rounded-lg w-full h-5/6" src={props.image} /> 
    <h1 className='mthelper'> {props.title} </h1>
    <p class="ml-3 -mt-1.5 font-light cursor: pointer; z-10"> {props.subtitle} </p>
    
    
    
    
    
    
    </div>
    </>
  )
}

export default CardCarousel;