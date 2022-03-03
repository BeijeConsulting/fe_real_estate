import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faBookmark,
	faHouseChimney,
	faList,
	faUser,
	faColumns,
	faChevronCircleDown,
	faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import "./mobileUserNavbar.css";
import { ROUTES } from "../../../../utils/properties";

const MobileUserNavbar = () => {
	const [toggle, setToggle] = useState(false);

	const openToggle = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<div className="flex flex-row font-primary bg-secondary p-2 color-primary md:hidden">
				<p className="mr-2">Menù</p>
				<FontAwesomeIcon icon={faChevronCircleDown} onClick={openToggle} />
			</div>
			{toggle === true && (
				<nav className="menu font-primary md:hidden">
					<Link
						className={"m-2 link-menu"}
						to={ROUTES.FE.BASE.USER.DASHBOARD}
						onClick={openToggle}
					>
						<FontAwesomeIcon className={"mr-2"} icon={faColumns} />
						Dashboard
					</Link>
					<Link
						className={"m-2 link-menu"}
						to={ROUTES.FE.BASE.USER.EDIT_PROFILE}
						onClick={openToggle}
					>
						<FontAwesomeIcon className={"mr-2"} icon={faUser} />
						Modifica profilo
					</Link>
					<Link className={"m-2 link-menu"} to={"new-adv"} onClick={openToggle}>
						<FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
						Pubblica annuncio
					</Link>
					<Link
						className={"m-2 link-menu"}
						to={ROUTES.FE.BASE.USER.POSTED_ADS}
						onClick={openToggle}
					>
						<FontAwesomeIcon className={"mr-2"} icon={faList} />
						Annunci pubblicati
					</Link>
					<Link
						className={"m-2 link-menu"}
						to={ROUTES.FE.BASE.USER.SAVED_ADS}
						onClick={openToggle}
					>
						<FontAwesomeIcon className={"mr-2"} icon={faBookmark} />
						Annunci salvati
					</Link>
					<Link
						className={"m-2 link-menu"}
						to={ROUTES.FE.BASE.USER.BUSINESS}
						onClick={openToggle}
					>
						<FontAwesomeIcon className={"mr-2"} icon={faBriefcase} />
						Business
					</Link>
				</nav>
			)}
		</>
	);
};

export default MobileUserNavbar;
