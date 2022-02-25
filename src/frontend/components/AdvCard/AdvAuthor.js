import React from 'react'

const AdvAuthor = (props) => {


    return (
        <div className='p-2 flex backdrop-blur-sm absolute bottom-0 left-0 z-10 right-0 h-18'>
            {/* AVATAR AUTHOR */}
            <div
                style={{ background: `url(${props.avatarUrl})`, backgroundSize: 'cover' }}
                className='w-10 h-10 rounded-full bg-gray-400 mr-2'
            />
            <p 
                className='cursor-pointer drop-shadow-md text-white font-bold text-2xl'
                onClick={props.onClick}
            >
                {props.displayName}
            </p>
        </div>
    )
}

export default AdvAuthor