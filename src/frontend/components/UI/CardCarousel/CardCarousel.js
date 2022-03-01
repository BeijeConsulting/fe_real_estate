import React from 'react'
import './cardcarousel.css';


const CardCarousel = (props) => {
  return (
    <>
      <div className="w-80 h-80 md:w-96 md:h-96 border rounded-lg bg-zinc-50 md:ml-6 mt-8 inline-block">
        <img className="rounded-lg w-full h-5/6" src={props.image} />
        <h1 className='mthelper'> {props.title} </h1>
        <p className="ml-4 -mt-2 font-light cursor: pointer; z-10"> {props.subtitle} </p>
      </div>
    </>
  )
}

export default CardCarousel;