import React from 'react';

import {
    Table
} from 'react-bootstrap';

const Orders = ({orders}) => {
    return(
        <Table>
            <thead>
            <tr>
                <th>TYPE</th>
                <th>PAGES</th>
                <th>AMOUNT</th>
                <th>WRITER'S ID</th>
                <th>STATUS</th>
            </tr>
            </thead>
            <tbody>
            {orders.map(({type, pages, amount, writer_id, status}) => (<tr>
                <td>{type}</td>
                <td>{pages}</td>
                <td>{amount}</td>
                <td>{writer_id}</td>
                <td>{status}</td>
            </tr>))}
            </tbody>
        </Table>
    );
};

export default Orders;