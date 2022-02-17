import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SearchSelect = (props) => {

    const [isOpened, setIsOpened] = useState(false)
    const select = useRef()

    let selectStyle = isOpened
        ? { transform: 'translateY(0px)', opacity: 1, pointerEvent:'auto' }
        : { transform: 'translateY(50px)', opacity: 0, pointerEvents:'none'}


    const toggleSelect = () => {
        setIsOpened(!isOpened)
    }

    const handleCallback = ( value ) => () =>{
        props.callback(value)
        setIsOpened(false)
    }


    const handleOptionsRender = (option, key) => {
        return (
            <p 
                key={option.value + key}
                className='hover:bg-gray-200 cursor-pointer rounded border-b-gray-300 py-2 px-2 border-b text-xl'
                onClick={handleCallback(option)}
            >
                {option.label}
            </p>
        )
    }


    return (
        <div className='relative'>
            {/* SELECT */}
            <div
                className={'cursor-pointer flex md:mx-4 underlined ' + props.fgClass}
                onClick={toggleSelect}
            >
                <p className='font-semibold'>{props.value}</p>
                <div className=' transition ml-1 text-3xl flex justify-center items-center'>
                    <FontAwesomeIcon 
                        className='transition' 
                        icon={faChevronDown} 
                        rotation={isOpened ? 180 : 0} 
                    />
                </div>
            </div>

            {/* OPTIONS */}
            <div
                ref={select}
                style={selectStyle}
                className='w-full max-h-48 overflow-hidden overflow-y-scroll  z-30 ml-4 mt-4 transition duration-300 absolute bg-white text-black p-2 rounded-b'
            >
                {props.options.map(handleOptionsRender)}
            </div>

        </div>
    )
}


SearchSelect.defaultProps = {
    fgClass:"color-primary",
    value: 'value',
    options: [{label:"lorem", value: 'lorem'}, {label:"ipsum", value: 'ipsum'}]
}

SearchSelect.propTypes = {
    options: PropTypes.array
}

export default SearchSelect