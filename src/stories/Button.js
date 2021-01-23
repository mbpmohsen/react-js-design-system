import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import Proptypes from "prop-types";
import {Loading} from "./Loading";

/**
 * Primary UI component for user interaction
 */
export const Button = ({backgroundColor, size, children, color, block, outline, loading, ...props}) => {
  const outlineMode = outline ? `button--outline-` : '';
  const blockMode = block ? `button-block` : '';
  const textColor = outline ? '' : (color === `light` || color === `angle`) ? `color-devil` : `color-light`;
  const loadingColor = (color === `light` || color === `angle`);
  const buttonColor = outline ? `button-outline--${color}` : `bg-${color}`;
  const buttonSize = outline ? `button-outline--${size}` : `button--${size}`;
  return (
      <button
          type="button"
          className={['button', buttonSize, buttonColor, textColor, outlineMode, blockMode].join(' ')}
          style={backgroundColor && {backgroundColor}}
          {...props}
      >
        {loading ? <Loading dark={loadingColor}/> : children}
      </button>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * Button contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Background color
   */
  color: Proptypes.oneOf([`devil`, `dark`, `angle`, `light`, `violets`, `orange`, `ocean`, `flamingo`, `leaf`, `sky`, `lemon`, `tomato`]),
  /**
   * Enable width 100%
   */
  block: Proptypes.bool,
  /**
   * Enable outline
   */
  outline: Proptypes.bool,
  /**
   * Enable loading and Disable All event
   */
  loading: Proptypes.bool,
  /**
   * Disable button
   */
};

Button.defaultProps = {
  backgroundColor: null,
  size: `md`,
  onClick: undefined,
  color: `ocean`,
  block: false,
  outline: false,
  loading: false,
  disable: false,
};
