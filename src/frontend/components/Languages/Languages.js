import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Languages = (props) => {
	const { i18n } = useTranslation();

	const changeLanguage = (lang) => () => {
		i18n.changeLanguage(lang);
	};

	return (
		<div
			className={`flex flex-col items-center justify-center ${props.classNameContainer}`}
		>
			<p className="cursor-pointer" onClick={changeLanguage("it")}>
				IT
			</p>
			<p className="cursor-pointer" onClick={changeLanguage("en")}>
				ENG
			</p>
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
