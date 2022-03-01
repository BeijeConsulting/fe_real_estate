import React, { useEffect, useState } from 'react'

// api
import { getUserSavedAds } from '../../../services/frontend/usersApi'

// component
import RenderAdvs from '../../components/AdvCard/RenderAdvs'

import { connect } from 'react-redux'

const SaveAdvs = ( props ) => {


    useEffect(() => {
        getUserSavedAds( props.dispatch )

    }, [])


    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Annunci Salvati</h1>
            <p>Qui sotto trovi i tuoi annunci preferiti.</p>

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

export default connect(mapStateToProps) (SaveAdvs)