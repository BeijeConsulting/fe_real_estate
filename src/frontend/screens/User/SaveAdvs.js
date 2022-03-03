import React, { useEffect, useState } from 'react'

// api
import { getUserSavedAds } from '../../../services/frontend/usersApi'

// component
import RenderAdvs from '../../components/AdvCard/RenderAdvs'

import { connect } from 'react-redux'

//translation
import { useTranslation } from 'react-i18next';

const SaveAdvs = (props) => {

    const { t } = useTranslation();
    useEffect(() => {
        getUserSavedAds(props.dispatch)

    }, [])


    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>{t("Dashboard.SavedAds")}</h1>
            <p>{t("Dashboard.FavouriteAds")}</p>

            <RenderAdvs
                className='max-w-3xl mt-6'
                data={props.savedAds}
                savedAds={props.savedAds}
            />


        </div>
    )
}

const mapStateToProps = state => ({
    savedAds: state.userMeDuck.savedAds
})

export default connect(mapStateToProps)(SaveAdvs)