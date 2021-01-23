import React from "react";
import './pallet.css';
import Proptypes from 'prop-types';

export const Pallet = ({color, code, name}) => {
    return (
        <div className={[`pallet-box`, `bg-${color}`].join(" ")}>
            <div className={`pallet-text`}>{name}</div>
            <div className={`pallet-text`}>{code}</div>
        </div>
    )
}

Pallet.prototype= {
    /**
     * Color name
     */
    color: Proptypes.oneOf([`devil`,`dark`,`angle`,`light`,`violets`,`orange`,`ocean`,`flamingo`,`leaf`,`sky`,`lemon`, `tomato`]),
    /**
     * Hex color code
     */
    code: Proptypes.string,
    /**
     * Color name
     */
    name: Proptypes.string,
}

Pallet.default ={
    color: `ocean`,
    code: `#08a0f7`,
    name: `ocean`
}