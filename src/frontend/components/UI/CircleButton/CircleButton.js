import React from 'react'
import PropTypes from "prop-types";

const CircleButton = (props) => {
    const onClick =(e) => {
        props.onClickCallback(e)
    }
  return (
    <button onClick={onClick}>{props.label}</button>
  )
}

CircleButton.defaultProps = {
	label: "label",
};

CircleButton.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export default CircleButton