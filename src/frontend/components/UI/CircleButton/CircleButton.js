import React from "react";
import PropTypes from "prop-types";

const CircleButton = (props) => {
	const onClick = (e) => {
		props.onClickCallback(e);
	};
	return (
		<button
			className="bg-sky-100 border-2 border-sky-300 border-solid rounded-full text-center w-8 h-8 my-2"
			onClick={onClick}
		>
			{props.label}
		</button>
	);
};

CircleButton.defaultProps = {
	label: "label",
};

CircleButton.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	onClickCallback: PropTypes.func,
};

export default CircleButton;
