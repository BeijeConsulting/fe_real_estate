import "./Navbar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../common/assets/logo/logo-black.png";

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

const Navbar = (props) => {
	let routes = [
		{ label: "HOME", route: "/" },
		{ label: "ANNUNCI", route: "/" },
		{ label: "SERVIZI", route: "/what-we-offer" },
		{ label: "CHI SIAMO", route: "/about-us" },
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
						handleLogoutClick
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

const handleAuth = (userNotLoggedIn, handleNavigate, handleLogoutClick) => {
	if (userNotLoggedIn) {
		return (
			<>
				<p
					onClick={handleNavigate("/auth/login")}
					className="text-xl nav-btn nav-fill font-primary"
				>
					ACCEDI
				</p>
				<p
					onClick={handleNavigate("/auth/signup")}
					className="text-xl nav-btn nav-outline font-primary"
				>
					REGISTRATI
				</p>
			</>
		);
	} else {
		return (
			<>
				<p
					onClick={handleNavigate("/user")}
					className="text-xl nav-btn nav-fill font-primary"
				>
					AREA PRIVATA
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
