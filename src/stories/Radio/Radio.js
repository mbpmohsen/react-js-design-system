import React from "react";
import PropTypes from "prop-types";
import "./radio.css";
import {useRandomId} from "../../utils/customHooks/useRandomId";

export const RadioButton = ({label, name, size, onChange, disabled, ...htmlAttribute}) => {
    const randomId = useRandomId(16);
    return (
        <div className="radio-wrapper">
            <input
                className="radio"
                type="radio"
                id={randomId}
                onChange={onChange}
                {...htmlAttribute}
                disabled={disabled}
                name={name}/>
            <label
                className={['radio-label', size].join(" ")}
                htmlFor={randomId}
            >{label}</label>
        </div>
    )
}

RadioButton.prototype = {
    /**
     * Label for radio
     */
    label: PropTypes.string,
    /**
     * Label for radio
     */
    size: PropTypes.oneOf(["sm", "lg"]),
    /**
     * Show radio is checked or not
     */
    onChange: PropTypes.func,
    /**
     * Disable radio
     */
    disabled: PropTypes.bool,
}

RadioButton.defaultProps = {
    size: `sm`,
    onChange: () => {
    },
    label: null,
    disabled: false,
}