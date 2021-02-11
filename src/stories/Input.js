import React from "react";
import * as PropTypes from "prop-types";
import './input.css';
import {useRandomId} from "../utils/customHooks/useRandomId";

export const Input = ({type, onChange, label, feedback, invalidFeedback, size, value, focus, ...htmlAttributes}) => {
    const inputSize = 'input--' + size;
    const textSize = 'text--' + size;
    const id = useRandomId(16);
    const invalidInput = invalidFeedback ? `invalid-input` : '';
    return (
        <div className={`input-box`}>
            {label && <label className={[`label`, textSize].join(' ')} htmlFor={id}>{label}</label>}
            <input type={type} className={[`input`, inputSize, invalidInput].join(' ')} id={id} value={value}
                   onChange={v => onChange(v)} autoFocus={focus} {...htmlAttributes}/>
            {feedback && <span className={['feedback', textSize].join(' ')}>{feedback}</span>}
            {invalidFeedback && <span className={['invalid-feedback', textSize].join(' ')}>{invalidFeedback}</span>}
        </div>
    )
}
Input.prototype = {
    type: PropTypes.oneOf([`text`, `tel`, `number`, `email`]),
    onChange: PropTypes.func,
    label: PropTypes.string,
    feedback: PropTypes.string,
    invalidFeedback: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    value: PropTypes.string,
    focus: PropTypes.bool,
}
Input.defaultProps = {
    type: `sm`,
    onChange: () => {},
    label: null,
    feedback: null,
    invalidFeedback: null,
    size: `sm`,
    value: null,
    focus: false,
}