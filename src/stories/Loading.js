import React from "react";
import './loading.css';
import Proptypes from "prop-types";

export const Loading = ({dark}) => {
    const color = dark ? `ellipsis-color-dark` : `ellipsis-color-light`;
    return (
        <div className="lds-ellipsis">
            <div className={color}/>
            <div className={color}/>
            <div className={color}/>
            <div className={color}/>
        </div>
    )
}
Loading.propTypes = {
    /**
     * Loading icon is dark
     */
    dark: Proptypes.bool,
}
Loading.defaultProps = {
    dark: false,
}
