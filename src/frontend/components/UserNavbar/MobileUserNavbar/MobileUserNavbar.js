import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPenToSquare, faBookmark,
    faHouseChimney, faList,
    faColumns, faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';

import "./mobileUserNavbar.css";


const MobileUserNavbar = () => {

    const [toggle, setToggle] = useState(false)


    const openToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div className='flex flex-row font-primary bg-secondary p-2 color-primary md:hidden'>
                <p className='mr-2'>Menù</p>
                <FontAwesomeIcon icon={faChevronCircleDown} onClick={openToggle} />
            </div>
            {
                toggle === true &&
                <nav className='menu font-primary md:hidden'>
                    <Link className={"m-2 link-menu"} to={""} onClick={openToggle}>
                        <FontAwesomeIcon className={"mr-2"} icon={faColumns} />
                        Dashboard
                    </Link>
                    <Link className={"m-2 link-menu"} to={"edit-profile"} onClick={openToggle}>
                        <FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
                        Modifica profilo
                    </Link>
                    <Link className={"m-2 link-menu"} to={"post-advs"} onClick={openToggle}>
                        <FontAwesomeIcon className={"mr-2"} icon={faList} />
                        Annunci pubblicati</Link>
                    <Link className={"m-2 link-menu"} to={"save-advs"} onClick={openToggle}>
                        <FontAwesomeIcon className={"mr-2"} icon={faBookmark} />
                        Annunci salvati
                    </Link>
                    <Link className={"m-2 link-menu"} to={"user/assess-building"} onClick={openToggle}>
                        <FontAwesomeIcon className={"mr-2"} icon={faHouseChimney} />
                        Valuta la tua casa
                    </Link>
                </nav>
            }
        </>
    )
}

export default MobileUserNavbar