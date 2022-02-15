// CSS
import './illustrations.css';

//React
import React from 'react';

// Illustrations
import icon1 from '../../../assets/images/icon1Home.jpg'
import icon2 from '../../../assets/images/icon2Home.jpg'
import icon3 from '../../../assets/images/icon3Home.jpg'

const Illustrations = (props) => {
  
return (
    <>
    <h1 class="font-primary text-3xl font-semibold ml-5"> PENSATO PER TE </h1>
    
    <div className={props.className}>
    
    <div className='single-animation'>
    <img src={icon1}></img>
    <p className='illustration-text'> Scopri i nostri servizi e cosa <br /> possiamo fare per te! </p>
    <button class="font-sans text-xl bg-yellow-400 rounded-2xl w-1/4 h-10 mt-2 border border-black"> Vai </button>

    </div>

    <div className='single-animation'>
    <img src={icon2}></img>
    <p className='illustration-text'> Vai ai  nostri annunci e naviga <br /> per il mercato immobiliare </p>
    <button class="font-sans text-xl bg-yellow-400 rounded-2xl w-1/4 h-10 mt-2 border border-black"> Vai </button>

    </div>

    <div className='single-animation  margin'>
    <img src={icon3}></img>
    <p className='illustration-text'> La nostra storia e i nostri <br /> valori fondamentali </p>
    <button class="font-sans text-xl bg-yellow-400 rounded-2xl w-1/4 h-10 mt-2 border border-black"> Vai </button>

    </div>
    
    
    
    
    
    </div>
    </>
    )
}

export default Illustrations