import React, { useEffect } from 'react'
import AdvCard from '../../components/AdvCard/AdvCard'

// UTILS
import { LOCAL_STORAGE_KEYS } from '../../../common/utils/storage'

// REDUX
import { connect } from 'react-redux'
import userMeDuck from '../../../redux/ducks/userMeDuck'

// API
import { userMe } from '../../../services/frontend/usersApi'

//TRANSLATION
import {useTranslation} from "react-i18next"

const Dashboard = (props) => {
    const {t} = useTranslation()
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
            <h1 className='text-3xl font-bold'>{t("Dashboard.Hello")} {props.userMe?.username} 👋 </h1>
            <p className='mt-40'>.</p>
            <p className='text-3xl font-semibold'>{t("Dashboard.LatestSavedAds")} <span className='text-xl'>({t("Dashboard.SeeAll")})</span></p>
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
