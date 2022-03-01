import React, { useEffect, useState } from 'react'
import { getUserPostedAdvs } from '../../../services/frontend/usersApi'
import RenderAdvs from '../../components/AdvCard/RenderAdvs'

const PostedAdvs = () => {
    
    const [advs, setAdvs ] = useState()

    useEffect(() => {
      getUserPostedAdvs().then(res => setAdvs(res))

    }, [])


    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Annunci Online</h1>
            <p>Qui sotto trovi gli annunci pubblicati da te.</p>
            <RenderAdvs 
                className='max-w-3xl mt-4'
                data={advs} 
            />
        </div>
    )
}

export default PostedAdvs