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
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

//connect

import { connect } from "react-redux";

//translation
import { useTranslation } from 'react-i18next';

// utils
import { ROUTES } from "../../../utils/properties";
import UserAvatar from "../../assets/images/avatar.png";

const UserNavbar = (props) => {
	const { t } = useTranslation()
	let routes = [
		{
			label: "Dashboard",
			icon: faColumns,
			route: ROUTES.FE.BASE.USER.DASHBOARD,
		},
		{
			label: t("Dashboard.EditProfileLabel"),
			icon: faUser,
			route: ROUTES.FE.BASE.USER.EDIT_PROFILE,
		},
		{
			label: t("Dashboard.PostAdLabel"),
			icon: faPenToSquare,
			route: "new-adv",
		},
		{
			label: t("Dashboard.ProfilePostedAds"),
			icon: faList,
			route: ROUTES.FE.BASE.USER.POSTED_ADS,
		},
		{
			label: t("Dashboard.SavedAds"),
			icon: faBookmark,
			route: ROUTES.FE.BASE.USER.SAVED_ADS,
		},
		{
			label: "Business",
			icon: faBriefcase,
			route: ROUTES.FE.BASE.USER.BUSINESS,
		},
	];

	const handleRouteRender = (route, key) => {
		return (
			<Link
				key={"dash-nav-" + key}
				className={"m-2 link-menu"}
				to={route.route}
			>
				<FontAwesomeIcon className={"mr-2"} icon={route.icon} />
				{route.label}
			</Link>
		);
	};

	return (
		<div className="hidden md:flex flex-col  min-w-max bg-secondary">
			<nav className="md:flex flex-col p-10 text-lg font-primary color-primary">
				<UserFullname
					fullname={props.user?.name + " " + props.user?.surname}
					email={props.user?.email}
				/>

				{routes.map(handleRouteRender)}
			</nav>
		</div>
	);
};

const UserFullname = ({ fullname, email }) => {
	return (
		<div className="flex flex-row mb-2 items-center space-x-2">
			<img className="avatar rounded-full h-20 w-20" src={UserAvatar} alt="" />
			<div>
				<h1 className="text-xl text-white"> {fullname} </h1>
				<p className="text-md">{email}</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	user: state.userMeDuck.userMe,
});

export default connect(mapStateToProps)(UserNavbar);
