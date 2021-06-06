import React from 'react';
import PropTypes from "prop-types";
import './badge.css';

/**
 * Badges can be used as part of links or buttons to provide a counter.
 * @param {string} color
 * @param {unknown} children
 * @returns {JSX.Element}
 * @constructor
 */
export const Badge = ({color, children}) => {
    const textColor = (color === `light` || color === `angle`) ? `color-devil` : `color-light`;
    const backgroundColor = 'bg-' + color;
    return (<div className={[`badge`, backgroundColor, textColor].join(" ")}>{children}</div>)
}

Badge.propTypes = {
    /**
     * Background color
     */
    color: PropTypes.oneOf([`devil`, `dark`, `angle`, `gray`, `neutral`, `light`, `violets`, `orange`, `ocean`, `flamingo`, `leaf`, `sky`, `lemon`, `tomato`]),
    /**
     * Button contents
     */
    children: PropTypes.node.isRequired,
}

Badge.defaultProps = {
    color: `ocean`,
};