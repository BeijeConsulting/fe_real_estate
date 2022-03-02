import "./Dashboard.css"
import React, { useEffect } from 'react'
import AdvCard from '../../components/AdvCard/AdvCard'

// UTILS
import { LOCAL_STORAGE_KEYS } from '../../../common/utils/storage'

// REDUX
import { connect } from 'react-redux'
import userMeDuck from '../../../redux/ducks/userMeDuck'

// API
import { userMe } from '../../../services/frontend/usersApi'
import AdvCardSkeleton from "../../components/AdvCard/AdvCardSkeleton"

const Dashboard = (props) => {

    useEffect(() => {



        userMe(
            localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TOKEN),
            props.dispatch
        )

    }, [])


    const handleSavedRender = (adv, key) => {
        return (
            <div className='max-w-3xl mt-4 inline-block'>
                <AdvCard
                    className='mr-4'
                    key={adv.id}
                    savedAds={props.savedAds}
                    id={adv.id}
                    city={adv.city}
                    rooms={adv.rooms}
                    address={adv.address}
                    description={adv.longDescription}
                />
            </div>
        )
    }


    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <p>@{props.userMe?.username}</p>
            <h1 className='text-3xl font-bold'>Ciao {props.userMe?.name} 👋 </h1>
            <p className='mt-40'>.</p>
            <p className='text-3xl font-semibold'>Ultimi Annunci Salvati <span className='text-xl'>(Vedi tutto)</span></p>
            <div className='scrolling-wrapper'>

                {props.savedAds.map(handleSavedRender)}
                
            </div>

        </div>
    )
}


const mapStateToProps = state => ({
    userMe: state.userMeDuck.userMe,
    savedAds: state.userMeDuck.savedAds
})

export default connect(mapStateToProps)(Dashboard); 
