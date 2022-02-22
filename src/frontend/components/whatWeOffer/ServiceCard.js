import React from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const ServiceCard = (props) => {
	const navigate = useNavigate();

	const goTo = (path) => () => navigate(path);

	return (
		<div
			className={`h-fit flex flex-col max-w-xs items-center justify-center overflow-hidden rounded-xl white
            md:h-64 md:max-w-2xl md:${
							props.reverse ? "flex-row-reverse" : "flex-row"
						} lg:max-w-3xl
                
            `}
		>
			{/* Redirect section */}
			<div
				className={`bg-secondary flex flex-col h-60 max-w-xs p-6 
                md:h-full w-screen md:max-w-lg
                    ${
											props.reverse ? "items-end" : "items-start"
										} justify-between           
                    ${props.classNameRedirectSection}
                `}
			>
				<p
					className={`
                     drop-shadow-sm text-xl text-white ${
												props.reverse ? "text-right" : "text-left"
											} 
                     md:text-2xl font-bold uppercase w-80 whitespace-pre-wrap
                    `}
				>
					{props.title}
				</p>
				<Button label={props.buttonText} onClick={goTo(props.redirectPath)} />
			</div>
			{/* Description */}
			<div
				className={`h-52 md:h-full w-screen max-w-xs p-3`}
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
	reverse: false,
	title: "Awesome title",
};

ServiceCard.propTypes = {
	buttonText: PropTypes.string,
	classNameRedirectSection: PropTypes.string,
	redirectPath: PropTypes.string,
	reverse: PropTypes.bool,
	title: PropTypes.string,
};

export default ServiceCard;
