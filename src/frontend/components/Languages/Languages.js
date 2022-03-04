import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import SearchSelect from "../Search/SearchSelect";

const Languages = (props) => {
	const { i18n } = useTranslation();

	let langs = [
		{ label: "IT", value: "it" },
		{ label: "EN", value: "en" },
	];

	const changeLanguage = (e) => {
		i18n.changeLanguage(e.value);
	};

	return (
		<div>
			<SearchSelect
				fgClass={props.fgClass}
				value={
					<FontAwesomeIcon className={props.classNameIcon} icon={faGlobe} />
				}
				callback={changeLanguage}
				showArrow={false}
				options={langs}
			/>
		</div>
	);
};

Languages.defaultProps = {
	classNameIcon: "",
	fgClass: "",
};

Languages.propTypes = {
	classNameIcon: PropTypes.string,
};

export default Languages;
