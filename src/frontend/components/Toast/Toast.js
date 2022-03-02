import React from 'react'
import "./Toast.css"


const Toast = (props) => {

  let baseStyle = 'max-w-sm p-4 rounded mx-auto z-50 shadow fixed top-6 left-0 right-0 '

  if (props.msg.length >= 2) {
    return (
      <div className={baseStyle + props.type + " slide-down"}>
        <p>{props.msg}</p>
      </div>
    )
  } else {
    return null
  }
}

Toast.defaultProps = {
  msg: '',
  type: 'default'  // default || error || warning || success
}

export default Toast