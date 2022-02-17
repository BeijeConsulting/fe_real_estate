import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '../../components/UI/Button/Button'
import Navbar from '../../components/Navbar/Navbar'
import AdvCard from '../../components/AdvCard/AdvCard'
import Filters from '../../components/Filters/Filters'

const AdvList = () => {

    let { city, advType } = useParams()
    let navigate = useNavigate()

    let type = '';
    
    const handleNavigate = ( dest ) => () => {
        navigate(dest)
    }

    switch (advType) {
        case 'rent': type = "Affitto"; break;
        case 'sell': type = "Vendita"; break;
        case 'short_rent': type = "Affito Breve"; break;
    }


    return (
        <div className='min-h-screen bg-gray'>
            <Navbar />


            <div className='max-w-6xl mx-auto mt-10 flex'>
                <Button
                    iconPosition="left"
                    label="Torna alla Home"
                    type="secondary"
                    onClick={handleNavigate('/')}
                />
            </div>

            <div className='max-w-5xl lg:max-w-6xl p-2 mx-auto'>
                <p className='text-3xl font-bold'>Ho trovato 2 case in {type} a {city} </p>

                <div className='flex mt-10 space-x-4'>
                    <div style={{ flex: 2 }}>
                        {/* CARD LIST HERE */}
                        <AdvCard 
                            onClick={handleNavigate(`/adv/${1}`)}
                        />
                    </div>
                    <Filters />
                   
                </div>
            </div>
        </div>
    )
}

export default AdvList