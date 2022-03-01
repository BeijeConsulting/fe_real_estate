import "./Navbar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../common/assets/logo/logo-black.png";
import { useTranslation } from "react-i18next";

//COMPONENTS
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import Languages from "../Languages/Languages";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// REDUX
import { connect } from "react-redux";
import { logout } from "../../../redux/ducks/userMeDuck";

//
import { ROUTES } from "../../../utils/properties";

const Navbar = (props) => {
	const { i18n,t} = useTranslation();

	let routes = [
		{
			label: `${t("Navbar.Home")}`,
			route: `/${i18n.language}/${ROUTES.FE.BASE.HOME}`,
		},
		{
			label: `${t("Navbar.Map")}`,
			route: `/${i18n.language}/${ROUTES.FE.BASE.MAP}`,
		},
		{
			label: `${t("Navbar.WhatWeOffer")}`,
			route: `/${i18n.language}/${ROUTES.FE.BASE.WHAT_WE_OFFER}`,
		},
		{
			label: `${t("Navbar.AboutUs")}`,
			route: `/${i18n.language}/${ROUTES.FE.BASE.ABOUT_US}`,
		},
	];

	let [sidebarOpened, setSidebarOpened] = useState(false);
	let navigate = useNavigate();

	const handleNavigate = (dest) => () => {
		navigate(dest);
	};

	const toggleSidebar = () => {
		setSidebarOpened(!sidebarOpened);
	};

	const handleLogoutClick = () => props.dispatch(logout());

	return (
		<div
			className={
				"z-40 bg-gradient top-0 right-0 left-0 " + (props.fixed ? "fixed" : "")
			}
		>
			<div className="px-4 md:px-0 py-2.5 lg:max-w-6xl mx-auto  justify-between flex flex-row items-center">
				<div className="flex flex-row">
					<div className="text-3xl lg:text-4xl font-primary font-bold flex">
						<img src={logo} alt="logo" className="h-10 " />
						DOMUS
					</div>

					{/* DESKTOP ONLY */}
					<div className="hidden md:flex lg:text-2xl flex-row pl-6 font-bold font-primary space-x-4 items-center">
						{routes.map(handleLinkRender(handleNavigate))}
					</div>
				</div>

				{/* DESKTOP ONLY */}
				<div className="hidden md:flex flex-row space-x-2">
					<Languages />
					{handleAuth(
						!props.userMeDuck.user?.id,
						handleNavigate,
						handleLogoutClick,
						i18n.language,
						t
					)}
				</div>

				{/* MOBILE SIDEBAR */}
				<div className="z-50 md:hidden flex flex-col justify-center items-center">
					<FontAwesomeIcon onClick={toggleSidebar} icon={faBars} size="xl" />

					<MobileSidebar
						isOpened={sidebarOpened}
						toggleSidebar={toggleSidebar}
						routes={routes}
						navigate={handleNavigate}
					/>
				</div>
			</div>
		</div>
	);
};

const handleLinkRender = (handleNavigate) => (link, key) => {
	return (
		<p
			key={"navbar-" + key}
			onClick={handleNavigate(link.route)}
			className="nav-link"
		>
			{link.label}
		</p>
	);
};

const handleAuth = (
	userNotLoggedIn,
	handleNavigate,
	handleLogoutClick,
	lang,
	t
) => {
	if (userNotLoggedIn) {
		return (
			<>
				<p
					onClick={handleNavigate(`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}`)}
					className="text-xl nav-btn nav-fill font-primary"
				>
					{t("Navbar.SignIn")}
				</p>
				<p
					onClick={handleNavigate(
						`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}/${ROUTES.FE.BASE.AUTH.SIGNUP.SELF}`
					)}
					className="text-xl nav-btn nav-outline font-primary"
				>
					{t("Navbar.SignUp")}
				</p>
			</>
		);
	} else {
		return (
			<>
				<p
					onClick={handleNavigate(`/${lang}/${ROUTES.FE.BASE.USER.SELF}`)}
					className="text-xl nav-btn nav-fill font-primary"
				>
					{t("Navbar.PrivateArea")}
				</p>
				<p onClick={handleLogoutClick} className="cursor-pointer">
					<FontAwesomeIcon icon={faArrowRightFromBracket} /> LOG OUT
				</p>
			</>
		);
	}
};

Navbar.defaultProps = {
	fixed: false,
};

const mapStateToProps = (state) => ({
	userMeDuck: state.userMeDuck,
});

export default connect(mapStateToProps)(Navbar);
