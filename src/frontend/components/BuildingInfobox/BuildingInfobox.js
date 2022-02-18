import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

export const BuildingInfobox = (props) => {
    return (
        <div className="flex flex-row m-2">
            <h1 className="text-base font-medium">{props.title}</h1>
            {
                !props.adv &&
                <FontAwesomeIcon className={"text-2xl text-red-700 ml-2"} icon={faXmark} />
            }
            {
                !!props.adv &&
                <FontAwesomeIcon className={"text-2xl text-green-700 ml-2"} icon={faCheck} />
            }
        </div>
    )
}

export default BuildingInfobox;