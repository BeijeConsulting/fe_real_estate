import React from 'react';
import './carousel2.css'

//Components
import CardCarousel from '../UI/CardCarousel/CardCarousel';


//Images
import Apartment1 from '../../../assets/images/Apartment1.jpg'
import Apartment2 from '../../../assets/images/Apartment2.jpg'
import Apartment3 from '../../../assets/images/Apartament3b.jpg'
import Apartment4 from '../../../assets/images/Apartment4.jpg'


const Carousel2 = () => {
    return (
        <>

            <h1 class="font-primary text-3xl font-semibold ml-5 mt-7 sm:text-4xl sm:mt-11">GLI ULTIMI ANNUNCI</h1>
            <div className="fixed-background">
                <div className="scroll-helper">
                    <div className='cards-container'>

                        <CardCarousel 
                            title="Casa Colonica Modena"
                            image={Apartment1}
                            subtitle="Vedi Dettagli"
                        />

                        <CardCarousel
                            title="Casa studenti Bologna"
                            image={Apartment2}
                            subtitle="Vedi Dettagli"
                        />
                     
                        <CardCarousel
                            title="Appartamento Chiasso"
                            image={Apartment3}
                            subtitle="Vedi Dettagli"
                        />

                        <CardCarousel
                            title="Terrazzo Bologna"
                            image={Apartment4}
                            subtitle="Vedi Dettagli"
                        />

                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Carousel2