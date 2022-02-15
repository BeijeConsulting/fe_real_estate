import React from 'react';
import PropTypes from "prop-types";

const Checkbox = (props) => {
    return (
        <>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
                className={props.className}
            />
            <label className={props.classLabel}>{props.label}</label>
        </>

    )
}

Checkbox.defaultProps = {
    className: 'w-4 h-4 cursor-pointer checked:border-blue-500',
    classLabel: 'font-primary'
};

Checkbox.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox