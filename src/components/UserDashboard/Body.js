import React, {Component} from 'react';

import {
    Table
} from 'react-bootstrap';

import Orders from './Orders';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders: [
                {id: 1, type: 'Computer Science', pages: 3, amount: 36.5, writer_id: "HSD827H123", status: 'Complete'}
            ]
        }
    }


    render(){
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Orders</th>
                        <th>Transaction</th>
                    </tr>
                    </thead>
                </Table>
                <Orders orders={this.state.orders}/>
            </div>
        );
    }
}

export default Body