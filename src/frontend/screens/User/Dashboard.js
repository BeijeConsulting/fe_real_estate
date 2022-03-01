import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import BlueSection from '../../components/BlueSection/BlueSection'
import { Link } from 'react-router-dom'
import AdvCard from '../../components/AdvCard/AdvCard'

// UTILS
import { LOCAL_STORAGE_KEYS } from '../../../common/utils/storage'

// REDUX
import { connect } from 'react-redux'
import userMeDuck from '../../../redux/ducks/userMeDuck'

// API
import { userMe } from '../../../services/frontend/usersApi'

const Dashboard = (props) => {

    useEffect(() => {

        userMe(
            localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN),
            props.dispatch
        )

    }, [])


    const handleSavedRender = ( adv, key) => {
        return(
            <AdvCard 
                savedAds={props.savedAds}
                id={adv.id}
                city={adv.city}
                rooms={adv.rooms}
                address={adv.address}
                description={adv.longDescription}
            />
        )
    }

    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Ciao {props.userMe?.username} 👋 </h1>
            <p className='mt-40'>.</p>
            <p className='text-3xl font-semibold'>Ultimi Annunci Salvati <span className='text-xl'>(Vedi tutto)</span></p>
            <div className='max-w-3xl mt-4'>
                { props.savedAds.map(handleSavedRender)}
            </div>

        </div>
    )
}


const mapStateToProps = state => ({
    userMe: state.userMeDuck.userMe,
    savedAds: state.userMeDuck.savedAds
})

export default connect(mapStateToProps)(Dashboard); 