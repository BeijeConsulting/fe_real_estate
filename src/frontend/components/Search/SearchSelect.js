import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const SearchSelect = (props) => {

    const [isOpened, setIsOpened] = useState(false)
    const select = useRef()

    let style = isOpened
        ? { transform: 'translateY(0px)', opacity: 1 }
        : { transform: 'translateY(50px)', opacity: 0 }


    const toggleSelect = () => {
        setIsOpened(!isOpened)
    }

    const handleCallback = ( value ) => () =>{
        props.callback(value)
    }


    const handleOptionsRender = (option, key) => {
        return (
            <p 
                className='hover:bg-gray-200 cursor-pointer rounded border-b-gray-300 py-2 px-2 border-b text-xl'
                onClick={handleCallback(option.value)}
            >
                {option.label}
            </p>
        )
    }


    return (
        <div className='relative'>
            <div
                className='cursor-pointer flex md:mx-4 color-primary underlined'
                onClick={toggleSelect}
            >
                <p>{props.value}</p>
                <div className=' transition ml-1 text-3xl flex justify-center items-center'>
                    <FontAwesomeIcon className='transition' icon={faChevronDown} rotation={isOpened ? 180 : 0} />
                </div>
            </div>

            <div
                ref={select}
                style={style}
                className='w-full z-30 ml-4 mt-4 transition duration-300 absolute bg-white text-black p-2 rounded-b'
            >
                {props.options.map(handleOptionsRender)}
            </div>

        </div>
    )
}


SearchSelect.defaultProps = {
    value: 'value',
    options: [{label:"lorem", value: 'lorem'}, {label:"ipsum", value: 'ipsum'}]
}

SearchSelect.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array
}

export default SearchSelect