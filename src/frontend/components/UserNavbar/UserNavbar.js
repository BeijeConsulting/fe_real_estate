import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faBookmark,
	faHouseChimney,
	faList,
	faColumns,
} from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../../../utils/properties";

const UserNavbar = () => {
	return (
		<div className="hidden md:flex flex-col h-screen bg-secondary">
			<nav className="md:flex flex-col p-10 text-lg font-primary color-primary">
				<Link className={"m-2 link-menu"} to={ROUTES.FE.BASE.USER.DASHBOARD}>
					<FontAwesomeIcon className={"mr-2"} icon={faColumns} />
					Dashboard
				</Link>
				<Link className={"m-2 link-menu"} to={ROUTES.FE.BASE.USER.EDIT_PROFILE}>
					<FontAwesomeIcon className={"mr-2"} icon={faPenToSquare} />
					Modifica profilo
				</Link>
				<Link className={"m-2 link-menu"} to={ROUTES.FE.BASE.USER.POSTED_ADS}>
					<FontAwesomeIcon className={"mr-2"} icon={faList} />
					Annunci pubblicati
				</Link>
				<Link className={"m-2 link-menu"} to={ROUTES.FE.BASE.USER.SAVED_ADS}>
					<FontAwesomeIcon className={"mr-2"} icon={faBookmark} />
					Annunci salvati
				</Link>
				<Link
					className={"m-2 link-menu"}
					to={`../${ROUTES.FE.BASE.ASSESS_BUILDING}`}
				>
					<FontAwesomeIcon className={"mr-2"} icon={faHouseChimney} />
					Valuta la tua casa
				</Link>
			</nav>
		</div>
	);
};

export default UserNavbar;
