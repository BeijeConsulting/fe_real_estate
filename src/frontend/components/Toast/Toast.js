import React from "react";
import "./Toast.css";
import PropTypes from "prop-types";

const Toast = (props) => {
	let baseStyle =
		"max-w-sm p-4 rounded mx-auto z-50 shadow fixed top-6 left-0 right-0 ";

	const clearValues = () => {
		setTimeout(() => props.clearValues({ type: "", default: "" }), 5000);
	};

	if (props.msg.length >= 2) {
		clearValues();
		return (
			<div className={baseStyle + props.type + " slide-down"}>
				<p>{props.msg}</p>
			</div>
		);
	} else {
		return null;
	}
};

Toast.defaultProps = {
	clearValues: () => null,
	msg: "",
	type: "default", // default || error || warning || success
};

Toast.propTypes = {
	clearValues: PropTypes.func,
	msg: PropTypes.string,
	type: PropTypes.string,
};

export default Toast;
