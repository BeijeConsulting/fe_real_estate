import React from 'react'
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    // <div className='rounded flex items-center justify-center bg-white' >
    <div className={props.className}>
      <div className='hidden md:flex '>
        {/* IMG TO ADD IN LG-SCREEN*/}
        <img src='' alt='login'/>
      </div>
      <div>
        {/* CONTENT  */}
        <p>FORM TO ADD</p>
      {props.children}
      </div>
    </div>
  )
}

Card.defaultProps = {
  children: <div></div>,
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card