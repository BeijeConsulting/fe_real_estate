import React from 'react'
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <div className={props.className}>
      <div className='color-primary'>
        {props.image}
      </div>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        className='bg-secondary focus:outline-none mx-2 '
      />
    </div>
  )
}

Input.defaultProps = {
  type: "text",
  image: '',
  className: "rounded-t bg-secondary flex items-center text-white mt-4 px-2 py-2 border-b-2 border-amber-300 font-primary"
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