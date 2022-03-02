import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";

const Input = (props) => {

  const [error, setError] = useState(false)

  const closeError = (e) => {
    e.preventDefault()
    props.onCloseError() //to reset error
    setError(!error)
  }
  useEffect(() => {
    if (props.errorMessage !== '') {
      setError(true)
    } else {
      setError(false)
    }
  }, [props.errorMessage])

  return (
    <div className={props.className} style={{marginTop: props.marginTop}}>
      {error &&
        <div className='background-error color-error absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-2'>
          <p>{props.errorMessage}</p>
          <button onClick={closeError}>X</button>
        </div>
      }
      <div className='color-primary'>
        {props.image}
      </div>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        className='bg-transparent focus:outline-none mx-2 flex-1'
      />
    </div>
  )
}

Input.defaultProps = {
  marginTop: 5,
  type: "text",
  image: '',
  className: "rounded-t bg-secondary flex items-center text-white px-2 py-2 border-b-2 border-amber-300 font-primary relative",
  errorMessage: ''
};

Input.propTypes = {
  placeholder: PropTypes.string,
  image: PropTypes.node,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
};

export default Input