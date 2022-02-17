import React from 'react';

//COMPONENTS
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/Footer/Footer';

//CSS
import './FAQ.css';

//FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

//IMAGES
import YellowWoman from "../../../assets/images/womanhelp1.jpg";

const FAQ = () => {


    return (
        <>
            <Navbar />

            <h1 class="font-bold text-3xl flex justify-center mt-4">F.A.Q.</h1>
            <div className='faq-container'>
                <div className='faq-questions'>

                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">
                        Non riesco ad aggiungere un annuncio
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div class="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">
                        Come faccio a scaricare l'app?
                        <div className='arrow-helper'>
                            <FontAwesomeIcon icon={faCircleArrowRight} />
                        </div>
                    </div>
                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">
                        Come creo un account business?
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <div className="text-2xl bg-zinc-200 rounded-lg w-full h-16 mt-8 flex items-center p-2 justify-between hover:border hover:border-yellow-500 cursor-pointer">
                        Ho problemi con la valutazione
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                    <h1>TI SERVE AIUTO?</h1>
                </div>

                <div className='faq-image'> </div>
            </div>
            <h2 className="text-4xl mt-8 font-bold ml-8"> NON RIESCI A TROVARE QUELLO CHE CERCHI? </h2>
            <h3 className="ml-8 text-xl"> CHIAMACI A QUESTI NUMERI! </h3>
            <p className="ml-8 font-semibold text-xl">+39 0371 678965</p>
            <p className="ml-8 font-semibold text-xl">+39 0382 786912</p>

            <div className="flex items-end justify-end -mt-4">
                <img src={YellowWoman} />
            </div>

            <div className="mt-8">
                <Footer />
            </div>



        </>
    )
}

export default FAQ