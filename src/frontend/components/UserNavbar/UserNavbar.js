import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPenToSquare, faBookmark,
    faHouseChimney, faList,
    faColumns, faUser
} from '@fortawesome/free-solid-svg-icons'

import "./userNavabar.css"


const UserNavbar = () => {
    return (
        <div className="hidden md:flex flex-col min-h-screen bg-secondary">
            <nav className='md:flex flex-col p-10 text-lg font-primary color-primary'>
                <Link className={"m-2 link-menu"} to={""}>
                    <FontAwesomeIcon className={"mr-2"} icon={faColumns} />
                    Dashboard
                </Link>
                <Link className={"m-2 link-menu"} to={"edit-profile"}>
                    <FontAwesomeIcon className={"mr-2"} icon={faUser} />
                    Modifica profilo
                </Link>
                <Link className={"m-2 link-menu"} to={"new-adv"}>
                    <FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
                    Pubblica annuncio
                </Link>
                <Link className={"m-2 link-menu"} to={"post-advs"}>
                    <FontAwesomeIcon className={"mr-2"} icon={faList} />
                    Annunci pubblicati</Link>
                <Link className={"m-2 link-menu"} to={"save-advs"}>
                    <FontAwesomeIcon className={"mr-2"} icon={faBookmark} />
                    Annunci salvati
                </Link>
                <Link className={"m-2 link-menu"} to={"user/assess-building"}>
                    <FontAwesomeIcon className={"mr-2"} icon={faHouseChimney} />
                    Valuta la tua casa
                </Link>
            </nav>
        </div>
    )
}

export default UserNavbar;
