import React from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const ServiceCard = (props) => {
	const navigate = useNavigate();

	const goTo = (path) => () => navigate(path);

	return (
		<div
			className={`h-60 white flex ${
				props.reverseRow ? "flex-row-reverse" : ""
			} items-center justify-center rounded-xl overflow-hidden`}
		>
			<div
				className={`h-full bg-secondary w-screen max-w-lg p-6 flex flex-col 
                ${
				props.reverseRow ? "items-end" : "items-start"
			}  justify-between ${props.classNameRedirectSection}`}
			>
				<p
					className={`text-white text-2xl 
                        ${props.reverseRow ? "text-right" : "text-left"}
                        font-bold uppercase w-80 whitespace-pre-wrap`}
				>
					{props.title}
				</p>
				<Button
					label={props.buttonText}
					callback={goTo(props.redirectPath)}
				/>
			</div>
			<div
				className={`h-full w-screen max-w-xs p-3`}
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
	reverseRow: false,
	title: "Awesome title",
};

ServiceCard.propTypes = {
	buttonText: PropTypes.string,
	classNameRedirectSection: PropTypes.string,
	redirectPath: PropTypes.string,
	reverseRow: PropTypes.bool,
	title: PropTypes.string,
};

export default ServiceCard;
