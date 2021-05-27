import React from "react";
import "./table.css";

export const Table = ({children, ...htmlAttributes}) => {
    return (
        <table className="table" {...htmlAttributes}>
            {children}
        </table>
    )
}

export const TableHeader = ({children, ...htmlAttributes}) => {
    return (
        <thead {...htmlAttributes}>
        <tr>
            {children}
        </tr>
        </thead>
    )
}

export const TableBody = ({children, ...htmlAttributes}) => {
    return (
        <tbody {...htmlAttributes}>
        {children}
        </tbody>
    )
}

export const TableRow = ({children, key, onClick, ...htmlAttributes}) => {
    return (
        <tr key={key} onClick={onClick} {...htmlAttributes}>
            {children}
        </tr>
    )
}