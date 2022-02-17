// CSS
import './illustrations.css';

//React
import React from 'react';

// Illustrations
import icon1 from '../../../assets/images/icon1Home.jpg'
import icon2 from '../../../assets/images/icon2Home.jpg'
import icon3 from '../../../assets/images/icon3Home.jpg'

// Routing
import { useNavigate } from 'react-router-dom';

const Illustrations = (props) => {
  
const navigate = useNavigate();

const navigateToAboutUs = () => {
    navigate('about-us')
}

const navigateToWhatWeOffer = () => {
    navigate('what-we-offer')
}




    return (
    <>
    
    <h1 className="font-primary text-3xl font-semibold mt-5 sm:ml-44 sm:text-4xl lg:ml-6"> PENSATO PER TE </h1>
    
    <div className={props.className}>
    
    <div className='single-animation'>
    <img src={icon1}></img>
    <p className='illustration-text'> Scopri i nostri servizi e cosa <br /> possiamo fare per te! </p>
    <button className="font-sans text-xl bg-yellow-400 rounded-2xl w-1/4 h-10 lg:mt-2 border border-black sm:mt-8 sm:w-1/3 sm:h-12 sm:text-2xl hover:bg-yellow-500" onClick={navigateToWhatWeOffer}> Vai </button>

    </div>

    <div className='single-animation'>
    <img src={icon2}></img>
    <p className='illustration-text'> Vai ai  nostri annunci e naviga <br /> per il mercato immobiliare </p>
    <button className="font-sans text-xl bg-yellow-400 rounded-2xl w-1/4 h-10 lg:mt-2 border border-black sm:mt-8 sm:w-1/3 sm:h-12 sm:text-2xl hover:bg-yellow-500"> Vai </button>

    </div>

    <div className='single-animation  margin'>
    <img src={icon3}></img>
    <p className='illustration-text'> La nostra storia e i nostri <br /> valori fondamentali </p>
    <button className="font-sans text-xl bg-yellow-400 rounded-2xl w-1/4 h-10 lg:mt-2 border border-black sm:mt-8 sm:w-1/3 sm:h-12 sm:text-2xl hover:bg-yellow-500" onClick={navigateToAboutUs}> Vai </button>

    </div>
    
    
    
    
    
    </div>
    </>

)
}

export default Illustrations