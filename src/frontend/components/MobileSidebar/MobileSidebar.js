import React from "react";
import "./MobileSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../../utils/properties";
import { useParams } from "react-router-dom";
import Languages from "../Languages/Languages";

const MobileSidebar = (props) => {
	let modalOpacity = props.isOpened ? 0.8 : 0;
	let sidebarTranslate = props.isOpened
		? "translateX(0px)"
		: "translateX(800px)";
	let events = props.isOpened ? "auto" : "none";

	const { t } = useTranslation();
	const { lang } = useParams();

	const handleSidebarLinkRender = (link, key) => {
		return (
			<div
				key={`sidenav-` + key}
				className="mb-2 p-2 text-white font-bold bg-secondary rounded"
				onClick={props.navigate(link.route)}
			>
				{link.label}
			</div>
		);
	};

	return (
		<div className="">
			<div
				style={{ transition: "0.8s", transform: sidebarTranslate }}
				className="p-2 w-3/4 flex flex-col bg-gradient fixed top-0 right-0 bottom-0"
			>
				<p className="text-3xl font-bold ">DOMUS</p>
				<Languages classNameIcon="text-2xl pt-4" />
				<div onClick={props.toggleSidebar} className="absolute right-4 top-4">
					<FontAwesomeIcon size={"lg"} icon={faTimes} />
				</div>
				<div className="mt-6">
					{props.routes.map(handleSidebarLinkRender)}
					{/*  auth buttons */}
					{props.userId ? (
						<>
							<p
								onClick={props.navigate(`/${lang}/${ROUTES.FE.BASE.USER.SELF}`)}
								className="text-xl mt-6 nav-btn nav-fill font-primary"
							>
								{t("Navbar.PrivateArea")}
							</p>
							<p onClick={props.logout} className="cursor-pointer pt-5">
								<FontAwesomeIcon icon={faArrowRightFromBracket} /> LOG OUT
							</p>
						</>
					) : (
						<>
							<p
								onClick={props.navigate(`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}`)}
								className="text-xl mt-6 p-2 nav-btn nav-fill font-primary"
							>
								{t("Navbar.SignIn")}
							</p>
							<p
								onClick={props.navigate(
									`/${lang}/${ROUTES.FE.BASE.AUTH.SELF}/${ROUTES.FE.BASE.AUTH.SIGNUP.SELF}`
								)}
								className="mt-2  p-2 text-xl nav-btn nav-outline font-primary"
							>
								{t("Navbar.SignUp")}
							</p>
						</>
					)}
				</div>
			</div>

			<div
				onClick={props.toggleSidebar}
				style={{ opacity: modalOpacity, pointerEvents: events }}
				className=" transition-all fixed inset-0 bg-black -z-10"
			/>
		</div>
	);
};

MobileSidebar.defaultProps = {
	isOpened: false,
};

export default MobileSidebar;
