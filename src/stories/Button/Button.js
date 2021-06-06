import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {Loading} from "../Loading/Loading";

/**
 * Button include size, color, outline and loading,...
 * @param {string} backgroundColor - One of the template colors
 * @param {string} size - One of the  sm, md, lg
 * @param {unknown} children - Anything assign to button
 * @param {string} color  -  One of the template colors
 * @param {boolean} block - With 100%
 * @param {boolean} outline - Outline mode
 * @param {boolean} loading - Button is Loading and disabled
 * @param {unknown} props - Any assigned attribute
 * @returns {JSX.Element}
 * @constructor
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
  color: PropTypes.oneOf([`devil`, `dark`, `angle`, `light`, `violets`, `orange`, `ocean`, `flamingo`, `leaf`, `sky`, `lemon`, `tomato`]),
  /**
   * Enable width 100%
   */
  block: PropTypes.bool,
  /**
   * Enable outline
   */
  outline: PropTypes.bool,
  /**
   * Enable loading and Disable All event
   */
  loading: PropTypes.bool,
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
