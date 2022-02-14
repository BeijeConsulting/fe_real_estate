import React from 'react'
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div>
      {props.imageSrc &&
      <img src={props.imageSrc} alt='icon'/> }
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
  imageSrc: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};

export default Input