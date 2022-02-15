import React from 'react';
import './carousel2.css'

//Components
import Card from '../UI/Card/Card';


//Images
import Apartment1 from '../../../assets/images/Apartment1.jpg'
import Apartment2 from '../../../assets/images/Apartment2.jpg'
import Apartment3 from '../../../assets/images/Apartament3b.jpg'
import Apartment4 from '../../../assets/images/Apartment4.jpg'


const Carousel2 = () => {
    return (
        <>

            <h1 class="font-primary text-3xl font-semibold ml-5 mt-6">GLI ULTIMI ANNUNCI</h1>
            <div className="fixed-background">
                <div className="scroll-helper">
                    <div className='cards-container'>

                        <Card
                            title="Casa Colonica Modena"
                            image={Apartment1}
                        />

                        <Card
                            title="Casa studenti Bologna"
                            image={Apartment2}
                        />
                     
                        <Card
                            title="Appartamento Chiasso"
                            image={Apartment3}
                        />

                        <Card
                            title="Terrazzo Bologna"
                            image={Apartment4}
                        />

                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Carousel2