import React, { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Languages = (props) => {

	const [opened, setOpened] = useState(false)
	const { i18n } = useTranslation();

	const changeLanguage = (lang) => () => {
		i18n.changeLanguage(lang);
	};

	return (
		<div
			className={`flex flex-col items-center justify-center relative  ${props.classNameContainer}`}
		>
			<div onMouseOver={() => setOpened(true)}>
				<FontAwesomeIcon icon={faGlobe} />
			</div>
			<div className={`${opened ? "block" : "hidden"} bg-white absolute top-10`}>
				<p className="cursor-pointer" onClick={changeLanguage("it")}>
					IT
				</p>
				<p className="cursor-pointer" onClick={changeLanguage("en")}>
					ENG
				</p>
			</div>
		</div>
	);
};

Languages.defaultProps = {
	classNameContainer: "",
};

Languages.propTypes = {
	classNameContainer: PropTypes.string,
};

export default Languages;
