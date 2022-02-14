import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faBookmark, faHouseChimney, faList } from '@fortawesome/free-solid-svg-icons'

import "./user.css"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Navbar />
                <div className='flex'>
                    <div className="flex flex-col w-3/12 h-screen bg-secondary">
                        <nav className='flex flex-col p-10 text-lg font-primary color-primary'>
                            <Link className={"m-2 link-menu"} to={"user/edit-profile"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
                                Modifica profilo
                            </Link>
                            <Link className={"m-2 link-menu"} to={"user/post-advs"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faList} />
                                Annunci pubblicati</Link>
                            <Link className={"m-2 link-menu"} to={"user/save-advs"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faBookmark} />
                                Annunci salvati
                            </Link>
                            <Link className={"m-2 link-menu"} to={"user/assess-building"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faHouseChimney} />
                                Valuta la tua casa
                            </Link>
                        </nav>
                    </div>
                    <section className='flex flex-col font-primary'>
                        <h1 className='text-3xl font-bold m-4'>
                            Benvenuto @utente
                        </h1>

                        <Outlet />
                    </section>

                </div>
            </>
        )
    }
}

export default User; 