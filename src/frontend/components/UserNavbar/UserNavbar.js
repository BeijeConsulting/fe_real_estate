import "./userNavabar.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faBookmark,
	faHouseChimney,
	faList,
	faColumns,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

//connect

import { connect } from "react-redux";

// utils
import { ROUTES } from "../../../utils/properties";
import UserAvatar from "../../assets/images/avatar.png";


const UserNavbar = (props) => {

	let routes = [
		{
			label: 'Dashboard',
			icon: faColumns,
			route: ROUTES.FE.BASE.USER.DASHBOARD
		},
		{
			label: 'Modifica Profilo',
			icon: faUser,
			route: ROUTES.FE.BASE.USER.EDIT_PROFILE
		},
		{
			label: 'Pubblica Annuncio',
			icon: faPenToSquare,
			route: "new-adv"
		},
		{
			label: 'Annunci Pubblicati',
			icon: faList,
			route: ROUTES.FE.BASE.USER.POSTED_ADS
		},
		{
			label: 'Annunci Salvati',
			icon: faBookmark,
			route: ROUTES.FE.BASE.USER.SAVED_ADS
		},
		{
			label: 'Valuta la tua Casa',
			icon: faHouseChimney,
			route: `../${ROUTES.FE.BASE.ASSESS_BUILDING}`
		}
	]


	const handleRouteRender = (route, key) => {
		return (
			<Link key={'dash-nav-' + key} className={"m-2 link-menu"} to={route.route}>
				<FontAwesomeIcon className={"mr-2"} icon={route.icon} />
				{route.label}
			</Link>
		)
	}

	return (
		<div className="hidden md:flex flex-col  min-w-max bg-secondary">
			<nav className="md:flex flex-col p-10 text-lg font-primary color-primary">

				<UserFullname fullname={props.user?.name + " " + props.user?.surname} email={props.user?.email} />

				{routes.map(handleRouteRender)}
			</nav>
		</div>
	);
};

const UserFullname = ({ fullname,email }) => {
	return (
		<div className="flex flex-row mb-2 items-center space-x-2">
			<img className="avatar" src={UserAvatar} alt="" />
			<div>
				<h1 className="text-xl text-white"> {fullname} </h1>
				<p className='text-md'>{email}</p>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	user: state.userMeDuck.userMe
})

export default connect(mapStateToProps)(UserNavbar);
