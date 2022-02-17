import React, { Component } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import MobileUserNavbar from '../../components/UserNavbar/MobileUserNavbar/MobileUserNavbar';
import { connect } from "react-redux"

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
                {/*this.props.username === undefined && (
                    <Navigate to={"/auth/login"} />
                )*/}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.userMeDuck.user.username,
});

export default connect(mapStateToProps)(User);
