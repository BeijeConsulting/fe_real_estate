import React from 'react'
import PropTypes from "prop-types";


const Button = (props) => {
  let classColor= props.type === 'primary' ? 'bg-primary' : 'bg-secondary text-white font-primary rounded-full flex py-1 px-2 cursor-pointer'
  return (
    <div className={classColor}>
      <button className={props.classLabel}>{props.label}</button>
      <div>
        {props.image}
      </div>
    </div>
  )
}


Button.defaultProps = {
  className: "bg-secondary text-white font-primary rounded-full flex py-1 px-2 cursor-pointer",
  classLabel: 'font-bold uppercase mr-4',
  image: ''
};

Button.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.node
};

export default Button