import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleArrowRight,
	faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
	let btnStyle =
		props.type === "secondary"
			? "bg-gradient-secondary text-white "
			: "bg-gradient ";

	const handleClick = (e) => {
		if (!props.disabled) {
			props.onClick(e);
		}
	};

	return (
		<div
			style={{ marginTop: props.marginTop }}
			className={
				btnStyle +
				props.className +
				(props.disabled && ' opacity-70') +
				" scale-in-hover cursor-pointer rounded-full flex justify-center items-center"
			}
			onClick={handleClick}
		>
			{props.iconPosition === "left" && (
				<FontAwesomeIcon
					size={"2x"}
					icon={faCircleArrowLeft}
					className="ml-1 my-1"
				/>
			)}
			<p
				className="mx-4 font-primary font-semibold"
				style={{ fontSize: props.size }}
			>
				{props.label}
			</p>

			{props.iconPosition === "right" && (
				<FontAwesomeIcon
					size={"2x"}
					icon={faCircleArrowRight}
					className="mr-1 my-1"
				/>
			)}
		</div>
	);
};

Button.defaultProps = {
	iconPosition: "right",
	label: "label",
	size: 20,
	marginTop: 0,
	disabled: false,
	onClick: () => undefined,
};

Button.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	image: PropTypes.node,
	onClick: PropTypes.func,
};

export default Button;
