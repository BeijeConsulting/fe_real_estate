import React, { useEffect } from 'react'
import { getUserMeAdvs } from '../../../services/frontend/usersApi'

const PostedAdvs = () => {
    
    useEffect(() => {
      getUserMeAdvs().then(res => console.log(res))

    }, [])
    
    
    return (
        <div className='p-6 bg-gray-200 flex-1'>
            <h1 className='text-3xl font-bold'>Annunci Online</h1>
            <p>Qui sotto trovi gli annunci pubblicati da te.</p>
        </div>
    )
}

export default PostedAdvs