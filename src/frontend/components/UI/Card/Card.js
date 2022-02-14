import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
		<div
			className={`rounded flex items-center justify-center bg-white  ${props.className}`}
		>
			{props.children}
		</div>
	);
};

Card.defaultProps = {
	children: <div></div>,
};

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Card;
