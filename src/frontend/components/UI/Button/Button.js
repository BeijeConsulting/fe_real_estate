import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
	let btnStyle =
		props.type === "secondary"
			? "bg-secondary text-white"
			: "bg-gradient";

	return (
		<div
			style={{ marginTop: props.marginTop }}
			className={
				btnStyle +
				" cursor-pointer rounded-full flex justify-center items-center"
			}
			onClick={props.onClick}
		>
			<p
				className="mr-2 ml-4 font-primary font-semibold"
				style={{ fontSize: props.size }}
			>
				{props.label}
			</p>

			<FontAwesomeIcon
				size={"2x"}
				icon={faCircleArrowRight}
				className="mr-1"
			/>
		</div>
	);
};

Button.defaultProps = {
	label: "label",
	size: 20,
	marginTop: 0,
	onClick: () => undefined,
};

Button.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	image: PropTypes.node,
	onClick: PropTypes.func,
};

export default Button;
