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
import Button from '../UI/Button/Button';

const Illustrations = (props) => {

    const navigate = useNavigate();

    const navigateTo = (dest) => () => {
        navigate(dest)
    }




    return (
        <div className='max-w-6xl mt-16 mx-auto'>
            <h1 className="font-primary text-3xl font-semibold mt-5 mb-6 sm:ml-44 sm:text-4xl lg:ml-6">DOMUS e' la soluzione adatta a te. </h1>
            <div className=' flex flex-col md:flex-row justify-between'>

                <Item
                    img={icon1}
                    label="Scopri i servizi che offriamo."
                    onClick={navigateTo('/')}
                />

                <Item
                    img={icon2}
                    label="Esplora la Mappa."
                    onClick={navigateTo('/map')}
                />
                <Item
                    img={icon3}
                    label="Scopri chi siamo e in cosa crediamo."
                    onClick={navigateTo('/about-us')}
                />
            </div>
        </div>
    )
}


const Item = ({ img, label, onClick }) => {
    return (
        <div className='single-animation flex flex-col justify-center items-center'>
            <img className='max-h-56' src={img}></img>
            <p className='illustration-text'>{label} </p>
            <Button marginTop={15} label="VAI" onClick={onClick} />
        </div>
    )
}


export default Illustrations