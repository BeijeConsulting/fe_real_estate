import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { getCities } from '../../../services/frontend/advertisementApi'

const LocationSelect = (props) => {

    const [isOpened, setIsOpened] = useState(false)
    const [cities, setCities] = useState({ all: [], filtered: [] })
    const select = useRef()

    let selectStyle = isOpened
        ? { transform: 'translateY(0px)', opacity: 1, pointerEvent: 'auto' }
        : { transform: 'translateY(50px)', opacity: 0, pointerEvents: 'none' }



    useEffect(() => {

        getCities()
            .then(res => {
                setCities({ all: res.data, filtered:res.data })
            })

    }, [])



    const toggleSelect = () => {
        setIsOpened(!isOpened)
    }

    const handleCallback = (value) => () => {
        props.callback(value)
        setIsOpened(false)
    }

    const handleOnChange = (e) => {
        let input = e.target.value.toLowerCase()

        setCities({...cities, 
            filtered: cities.all.filter(city => city.toLowerCase().includes(input) )
        })
    }

    const handleOptionsRender = (city, key) => {
        return (
            <p
                key={city + key}
                className='hover:bg-gray-200 cursor-pointer rounded border-b-gray-300 py-2 px-2 border-b text-xl'
                onClick={handleCallback(city)}
            >
                {city}
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
                <input
                    className='text-lg border-2 border-gray-400 rounded px-2 py-1 mb-4 w-full focus:outline-none'
                    onChange={handleOnChange}
                    placeholder="Cerca una citta'..."
                />
                {cities.filtered.map(handleOptionsRender)}
            </div>

        </div>
    )
}


LocationSelect.defaultProps = {
    fgClass: "color-primary",
    value: 'value',
    options: [{ label: "lorem", value: 'lorem' }, { label: "ipsum", value: 'ipsum' }]
}

LocationSelect.propTypes = {
    options: PropTypes.array
}

export default LocationSelect