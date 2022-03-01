import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../../components/Navbar/Navbar";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import MobileUserNavbar from "../../components/UserNavbar/MobileUserNavbar/MobileUserNavbar";

// redux 
import { connect } from "react-redux";

// utils
import { ROUTES } from "../../../utils/properties";

const User = () => {

	return (
		<div className='h-screen flex flex-col'>
			<Navbar />
			<MobileUserNavbar />
			<div className="flex flex-1">
				<UserNavbar />
				<section className="flex flex-col flex-1 font-primary w-full">
					<Outlet />
				</section>
			</div>
		</div>
	);
}


export default User;
