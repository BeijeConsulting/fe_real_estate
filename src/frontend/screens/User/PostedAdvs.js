import React from 'react'
import RenderAdvs from '../../components/AdvCard/RenderAdvs'

import { connect } from 'react-redux'

const PostedAdvs = (props) => {
    
    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Annunci Online</h1>
            <p>Qui sotto trovi gli annunci pubblicati da te.</p>
            <RenderAdvs 
                className='max-w-3xl mt-4'
                data={props.postedAds} 
            />
        </div>
    )
}

const mapStateToProps = state => ({
    postedAds: state.userMeDuck.postedAds
})

export default connect(mapStateToProps) (PostedAdvs)