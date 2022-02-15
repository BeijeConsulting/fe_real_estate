import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ServiceCard = (props) => {
	const navigate = useNavigate();

	const goTo = (path) => () => navigate(path);

	return (
		<div
			className={`h-48 white flex items-center justify-center rounded-xl overflow-hidden text-white`}
		>
			<div
				className={`h-full bg-secondary w-96 p-3 flex flex-col items-start justify-between ${props.classNameRedirectSection}`}
			>
				<p>{props.title}</p>
				<button onClick={goTo(props.redirectPath)}>
					{props.buttonText}
				</button>
			</div>
			<div
				className={`h-full w-52 p-3`}
				style={{ backgroundColor: "#403F3F" }}
			>
				{props.children}
			</div>
		</div>
	);
};

ServiceCard.defaultProps = {
	buttonText: "Awesome button",
	classNameRedirectSection: "",
	redirectPath: "/not-found",
	title: "Awesome title",
};

ServiceCard.propTypes = {
	buttonText: PropTypes.string,
	classNameRedirectSection: PropTypes.string,
	redirectPath: PropTypes.string,
	title: PropTypes.string,
};

export default ServiceCard;
