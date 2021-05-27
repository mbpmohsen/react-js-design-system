import React from "react";
import PropTypes from "prop-types"
import Proptypes from "prop-types";
import "./progress.css";

export const Progress = ({status, color}) => {

    return (
        <div className="progress-box">
            <div className={[`progress-bar`, `bg-${color}`].join(" ")} style={{width: `${status}%`}}/>
        </div>
    )
}
Progress.propTypes =
{
    /**
     * Progress status
     */
    status: PropTypes.number,
    /**
     * Progress color
     */
    color: Proptypes.oneOf([`devil`, `dark`, `angle`, `light`, `violets`, `orange`, `ocean`, `flamingo`, `leaf`, `sky`, `lemon`, `tomato`]),
}
Progress.default = {
    status: 50,
    color: `leaf`,
}