import React from 'react';
import PropTypes from "prop-types";

const Checkbox = (props) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <label className={props.className}>{props.label}</label>
        </div>

    )
}

Checkbox.defaultProps = {
    required: false,
};

Checkbox.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox