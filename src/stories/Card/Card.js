import React from "react";
import PropTypes from 'prop-types';
import './card.css';

/**
 * A card is a flexible and extensible content container.
 * @param {boolean} padding - Handle default padding for card
 * @param {unknown} children - Any content
 * @returns {JSX.Element}
 * @constructor
 */
export const Card = ({padding, children}) => {
    const defaultPadding = padding ? `default-padding` : ' '
    return (<div className={[`card`,defaultPadding].join(" ")}>{children}</div>)
}
Card.prototype = {
    /**
     * Default padding
     */
    padding: PropTypes.bool,
    /**
     * Any item to add inside the component
     */
    children: PropTypes.node.isRequired
}