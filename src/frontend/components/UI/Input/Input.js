import React from 'react'
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      {props.image }
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
      />
    </div>
  )
}

Input.defaultProps = {
  required: false,
  type: "text",
  image: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  image: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Input