import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../../components/Navbar/Navbar";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import MobileUserNavbar from "../../components/UserNavbar/MobileUserNavbar/MobileUserNavbar";
import RefreshTokenOrRedirect from "../../components/RefreshTokenOrRedirect/RefreshTokenOrRedirect";

import { connect } from 'react-redux'
import { getUserMe, getUserPostedAdvs, getUserSavedAds } from "../../../services/frontend/usersApi";


const User = (props) => {

	useEffect(() => {


		getUserMe(props.dispatch)
		getUserSavedAds(props.dispatch)
		getUserPostedAdvs(props.dispatch)

	}, [])


	return (
		<div className="h-screen flex flex-col">
			<RefreshTokenOrRedirect />
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
};

export default connect()(User);
