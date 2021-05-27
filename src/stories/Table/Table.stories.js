import React from 'react';
import '../../styles/css/dmeo.css';
import {Table, TableBody, TableRow, TableHeader} from "./Table";

export default {
    title: 'Example/Table',
    component: Table,
}

export const TableExample = () => {
    return (
        <Table>
            <TableHeader>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </TableHeader>
            <TableBody>
                <TableRow onClick={e => console.log(e)}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </TableRow>
                <TableRow onClick={e => console.log(e)}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </TableRow>
                <TableRow onClick={e => console.log(e)}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </TableRow>
                <TableRow onClick={e => console.log(e)}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </TableRow>
                <TableRow onClick={e => console.log(e)}>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </TableRow>
            </TableBody>
        </Table>
    )
}