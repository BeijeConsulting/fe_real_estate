import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Button = (props) => {
	let btnStyle =
		props.type === "secondary"
			? "bg-gradient-secondary text-white "
			: "bg-gradient ";

	return (
		<div
			style={{ marginTop: props.marginTop }}
			className={
				btnStyle +
				props.className +
				" scale-in-hover cursor-pointer rounded-full flex justify-center items-center"
			}
			onClick={props.onClick}
		>

			{props.iconPosition === "left" &&
				<FontAwesomeIcon
					size={"2x"}
					icon={faCircleArrowLeft}
					className="ml-1 my-1"
				/>
			}
			<p
				className="mx-4 font-primary font-semibold"
				style={{ fontSize: props.size }}
			>
				{props.label}
			</p>

			{props.iconPosition === "right" &&
				<FontAwesomeIcon
					size={"2x"}
					icon={faCircleArrowRight}
					className="mr-1 my-1"
				/>
			}
		</div>
	);
};

Button.defaultProps = {
	iconPosition: 'right',
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
