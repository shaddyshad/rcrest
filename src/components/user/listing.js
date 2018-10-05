import React, {Component} from 'react';
import {
    HelpBlock, Table
} from 'react-bootstrap';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

import {database} from "../../firebase/firebase"
import Spinner from "../shared/loader";
import {doneLoadingData, loadingData} from "../../actions/async";

const mapStateToProps = state => {
    return {
        orders: state.orders,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(loadingData()),
        doneLoading: () => dispatch(doneLoadingData())
    }
}


class Listing extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders: this.props.orders
        }
    }

    componentWillMount(){
        this.props.loadData();
        const orders = this.state.orders;
        console.log(orders);
        const {match: {params: {filter}}} = this.props;
        let filtered = [];
        for(let i in orders){
            if(orders.hasOwnProperty(i)){
                if(orders[i].information.class === filter.toUpperCase()){
                    const {requestID} = orders[i].request;
                    database.ref('/requests/'+i).once("value")
                        .then(snapshot => {
                        const e = {...orders[i], request:{...orders[i].request, ...snapshot.val()}, orderID: i};
                        filtered.push(e);
                    })
                }

            }
        }
        this.setState({orders: filtered});
        this.props.doneLoading();
    }

    render(){
        const {orders} = this.state;
        const len = orders.length;
        console.log(orders);
        return (
            <div>
                {this.props.isLoading ? <Spinner/> :
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
                        len?
                            orders.map((el, idx) => (
                                <tr key={idx}>
                                    <td>{el.orderID}</td>
                                    <td>{el.information.class.toLocaleLowerCase()}</td>
                                    <td>{el.request.topic || "No specified topic"}</td>
                                    <td>{el.request.deadline}</td>
                                    <td>{el.request.discipline}</td>
                                    <td>{el.request.pages}</td>
                                    <td>{el.information.amount}</td>
                                    <td><Link to={'/order/' + el.orderID}>View details</Link></td>
                                </tr>
                            )) : null
                    }
                    </tbody>
                    </Table>
                    {len === 0 ? <HelpBlock>You have no {this.props.title} orders</HelpBlock> : null}

                    </div>
                }
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Listing));