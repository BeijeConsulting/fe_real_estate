import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import MobileUserNavbar from '../../components/UserNavbar/MobileUserNavbar/MobileUserNavbar';

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
                <MobileUserNavbar />
                <div className='flex'>
                    <UserNavbar />
                    <section className='flex flex-col font-primary'>
                        <Outlet />
                    </section>

                </div>
            </>
        )
    }
}

export default User; 