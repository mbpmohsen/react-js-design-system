import React from "react";
import "./table.css";

/**
 * An HTML table consists of one <table> element and one or more <tr>, <th>, and <td> elements.
 * @param {unknown} children
 * @param {unknown} htmlAttributes
 * @returns {JSX.Element}
 * @constructor
 */
export const Table = ({children, ...htmlAttributes}) => {
    return (
        <table className="table" {...htmlAttributes}>
            {children}
        </table>
    )
}

/**
 * Table header
 * @param {unknown} children
 * @param {unknown} htmlAttributes
 * @returns {JSX.Element}
 * @constructor
 */
export const TableHeader = ({children, ...htmlAttributes}) => {
    return (
        <thead {...htmlAttributes}>
        <tr>
            {children}
        </tr>
        </thead>
    )
}

/**
 * Table body
 * @param {unknown} children
 * @param {unknown} htmlAttributes
 * @returns {JSX.Element}
 * @constructor
 */

export const TableBody = ({children, ...htmlAttributes}) => {
    return (
        <tbody {...htmlAttributes}>
        {children}
        </tbody>
    )
}

/**
 * Row in table
 * @param {unknown} children
 * @param {number} key - Key for map item
 * @param {function} onClick - function for selected row
 * @param {unknown} htmlAttributes
 * @returns {JSX.Element}
 * @constructor
 */
export const TableRow = ({children, key, onClick, ...htmlAttributes}) => {
    return (
        <tr key={key} onClick={onClick} {...htmlAttributes}>
            {children}
        </tr>
    )
}