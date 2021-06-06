import React from "react";
import './checkbox.css';
import {useRandomId} from "../../utils/customHooks/useRandomId";
import PropTypes from "prop-types";

/**
 * The checkbox is shown as a square box that is ticked (checked) when activated.
 * @param {function} onChange - Callback function for onchange
 * @param {string} size - One of the sm, lg
 * @param {string} label - Label for checkbox
 * @param {boolean} disabled - Disabled checkbox
 * @param {unknown} htmlAttributes - You can assign any needed html attribute
 * @returns {JSX.Element}
 * @constructor
 */
export const Checkbox = ({onChange, size, label, disabled, ...htmlAttributes}) => {
    const randomId = useRandomId(16);
    const checkboxLabelSize = `checkbox-label-` + size;

    return (
        <div className="checkbox-frame">
            <input id={randomId}
                   type="checkbox"
                   onChange={e => onChange(e)}
                   className={['checkbox'].join(" ")}
                   disabled={disabled}
                   {...htmlAttributes}
            />
            {label &&
            <label htmlFor={randomId} className={['checkbox-label', checkboxLabelSize].join(" ")}>{label}</label>}
        </div>);
}

Checkbox.prototype = {
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'lg']),
    label: PropTypes.string,
    disabled: PropTypes.bool,
}

Checkbox.defaultProps = {
    size: `sm`,
    onChange: () => {},
    label: null,
    disabled: false,
}