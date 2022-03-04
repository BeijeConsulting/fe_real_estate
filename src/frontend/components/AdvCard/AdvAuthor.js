import React from 'react'

const AdvAuthor = (props) => {

    return (
        <div className='p-2 items-center flex backdrop-blur-sm absolute bottom-0 left-0 z-10 right-0 h-18'>
            {/* AVATAR AUTHOR */}
            <div
                style={{ background: `url(${props.avatarUrl})`, backgroundSize: 'cover' }}
                className='w-10 h-10 rounded-full bg-gray-400 mr-2'
            />
            <div
                className='cursor-pointer items-center drop-shadow-md text-white font-bold text-2xl'
                onClick={props.onClick}
            >

                
                <p className='text-sm'>{props.business ?  props.business.businessName : ''}</p>
                <p>{props.displayName}</p>
            </div>
        </div>
    )
}

export default AdvAuthor