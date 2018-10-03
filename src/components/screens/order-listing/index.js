import React, {Component} from 'react';
import {
    HelpBlock, Table
} from 'react-bootstrap';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
};


class Listing extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders: this.props.orders
        }
    }

    componentDidMount(){
        const orders = [...this.state.orders];
        const {match: {params: {filter}}} = this.props;
        const filtered = orders.filter(order => order.information.class = filter.toUpperCase());
        this.setState({orders: filtered});
    }

    render(){
        const {orders} = this.state;
        const len = orders.length;
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
                        len ?
                            orders.map((el, idx) => (
                                <tr key={idx}>
                                    <td>{el.orderID}</td>
                                    <td>{el.information.class.toLocaleLowerCase()}</td>
                                    <td>{el.request.topic || "No specified topic"}</td>
                                    <td>{el.request.deadline}</td>
                                    <td>{el.request.discipline}</td>
                                    <td>{el.request.pages}</td>
                                    <td>{el.information.amount}</td>
                                    <td><Link to={'/detail/'+el.orderId}>View details</Link></td>
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
export default connect(mapStateToProps)(Listing);