import React from 'react'
import PropTypes from "prop-types";

const Textarea = (props) => {
    return (
        <textarea
            className={props.className}
            style={{
                maxHeight: props.maxHeight,
                minHeight: props.minHeight
            }}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        >
        </textarea>
    )
}

Textarea.defaultProps = {
    className: "rounded border-2 p-2 border-slate-900 focus:outline-none h-32 w-80 bg-slate-200 text-slate-900"
};

Textarea.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
};

export default Textarea;