import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPenToSquare, faBookmark,
    faHouseChimney, faList,
    faColumns, faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons'

import "./user.css"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    toggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }


    render() {
        return (
            <>
                <Navbar />
                <div className='flex flex-row font-primary bg-secondary p-2 color-primary md:hidden'>
                    <p className='mr-2'>Menù</p>
                    <FontAwesomeIcon icon={faChevronCircleDown} onClick={this.toggle} />
                </div>
                {
                    this.state.toggle === true &&
                    <nav className='menu md:hidden'>
                        <Link className={"m-2 link-menu"} to={""} onClick={this.toggle}>
                            <FontAwesomeIcon className={"mr-2"} icon={faColumns} />
                            Dashboard
                        </Link>
                        <Link className={"m-2 link-menu"} to={"edit-profile"} onClick={this.toggle}>
                            <FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
                            Modifica profilo
                        </Link>
                        <Link className={"m-2 link-menu"} to={"post-advs"} onClick={this.toggle}>
                            <FontAwesomeIcon className={"mr-2"} icon={faList} />
                            Annunci pubblicati</Link>
                        <Link className={"m-2 link-menu"} to={"save-advs"} onClick={this.toggle}>
                            <FontAwesomeIcon className={"mr-2"} icon={faBookmark} />
                            Annunci salvati
                        </Link>
                        <Link className={"m-2 link-menu"} to={"user/assess-building"} onClick={this.toggle}>
                            <FontAwesomeIcon className={"mr-2"} icon={faHouseChimney} />
                            Valuta la tua casa
                        </Link>
                    </nav>
                }
                <div className='flex'>
                    <div className="hidden md:flex flex-col h-screen bg-secondary">
                        <nav className='md:flex flex-col p-10 text-lg font-primary color-primary'>
                            <Link className={"m-2 link-menu"} to={""}>
                                <FontAwesomeIcon className={"mr-2"} icon={faColumns} />
                                Dashboard
                            </Link>
                            <Link className={"m-2 link-menu"} to={"edit-profile"}>
                                <FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
                                Modifica profilo
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
                    <section className='flex flex-col font-primary'>
                        <Outlet />
                    </section>

                </div>
            </>
        )
    }
}

export default User; 