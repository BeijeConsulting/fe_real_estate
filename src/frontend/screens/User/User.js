import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='flex'>

                <sidebar className="flex flex-col w-3/12 h-screen bg-secondary">
                    <nav className='flex flex-col p-10 text-lg font-primary color-primary'>
                        <Link className={"link-menu"} to={"user/profile"}>Modifica profilo</Link>
                        <Link className={"link-menu"} to={"user/post-advs"}>Annunci pubblicati</Link>
                        <Link className={"link-menu"} to={"user/save-advs"}>Annunci salvati</Link>
                        <Link className={"link-menu"} to={"user/assess-building"}>Valuta la tua casa</Link>
                    </nav>
                </sidebar>
                <section className='flex flex-col font-primary'>
                    <h1 className='text-3xl font-bold m-4'>
                        Benvenuto @utente
                    </h1>

                    <Outlet />
                </section>

            </div>
        )
    }
}

export default User; 