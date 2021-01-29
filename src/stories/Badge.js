import React from 'react';
import Proptypes from "prop-types";
import './badge.css';
import PropTypes from "prop-types";

export const Badge = ({color, label}) => {
    const textColor = (color === `light` || color === `angle`) ? `color-devil` : `color-light`;
    return (<div className={[`badge`,`bg-${color}`, textColor].join(" ")}>{label}</div>)
}

Badge.propTypes = {
    /**
     * Background color
     */
    color: Proptypes.oneOf([`devil`, `dark`, `angle`, `light`, `violets`, `orange`, `ocean`, `flamingo`, `leaf`, `sky`, `lemon`, `tomato`]),
    /**
     * Button contents
     */
    label: PropTypes.node.isRequired,
}

Badge.defaultProps = {
    color: `ocean`,
    label: null
};