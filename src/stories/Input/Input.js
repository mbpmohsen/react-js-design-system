import React from "react";
import * as PropTypes from "prop-types";
import './input.css';

/**
 * Input component:
 * @param {string} type -text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, and color.
 * @param {function} onChange - Show onChange
 * @param {string} label - label for input
 * @param {string} feedback - Show help
 * @param {string} invalidFeedback - Show error
 * @param {string} size - One of sm, md, lg
 * @param {unknown} value - Input value
 * @param {string} name - Input name
 * @param {boolean} focus - autofocus
 * @param {unknown} htmlAttributes
 * @returns {JSX.Element}
 * @constructor
 */
export const Input = ({type, onChange, label, feedback, invalidFeedback, size, value, name, focus, ...htmlAttributes}) => {
    const inputSize = 'input--' + size;
    const textSize = 'text--' + size;
    // const id = useRandomId(16);
    const invalidInput = invalidFeedback ? `invalid-input` : '';
    return (
        <div className={`input-box`}>
            {label && <label className={[`label`, textSize].join(' ')} htmlFor={name}>{label}</label>}
            <input type={type} className={[`input`, inputSize, invalidInput].join(' ')} id={name} value={value}
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
    name: PropTypes.string
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
    name: null
}