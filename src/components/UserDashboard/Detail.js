import React, {Component} from 'react';

import {
    Table,
    HelpBlock
} from 'react-bootstrap';

class Detail extends Component {
    render() {
        const len = this.props.orders.length;
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>STATUS</th>
                        <th>PAPER TOPIC</th>
                        <th>DEADLINE</th>
                        <th>DISCIPLINE</th>
                        <th>PAGES</th>
                        <th>AMOUNT</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        len > 0 ?
                            this.state.pending.map(el => (
                                <tr>
                                    <td>{el.order_id}</td>
                                    <td>{el.status}</td>
                                    <td>{el.paper_type}</td>
                                    <td>{el.deadline}</td>
                                    <td>{el.discipline}</td>
                                    <td>{el.pages}</td>
                                    <td>{el.amount}</td>
                                    <td>{el.action}</td>
                                </tr>
                            )) : null
                    }
                    </tbody>
                </Table>
                {len === 0 ? <HelpBlock>You have no {this.props.title} orders</HelpBlock>: null}

            </div>

        );
    }
}

export default Detail