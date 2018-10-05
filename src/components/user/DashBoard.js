import React, {Component} from 'react';
import {
    CLASS_APPROVED,
    CLASS_IN_PROGRESS,
    CLASS_ORDER_CLOSED,
    CLASS_PENDING, STATE_ORDER_DISPUTED, STATE_ORDER_REVISED
} from "../../constants/currentOrder/information";
import Item, {Item2} from "./Item";
import {Col} from "react-bootstrap";
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardItems: [
                {
                    id: 1,
                    text: 'Pending',
                    icon: 'server',
                    path: '/orders/pending',
                    category: CLASS_PENDING,
                    count: 0,
                    bg: '#d9534f'
                },
                {
                    id: 2,
                    text: 'In Progress',
                    icon: 'list-ul',
                    path: '/orders/progress',
                    category: CLASS_IN_PROGRESS,
                    count: 0,
                    bg: "#f0ad4e"
                },
                {
                    id: 3,
                    text: 'Completed',
                    icon: 'check-square',
                    path: '/orders/completed',
                    category: CLASS_ORDER_CLOSED,
                    count: 0,
                    bg: "#5cb85c"
                },
                {
                    id: 4,
                    text: 'Approved',
                    icon: 'money-bill',
                    path: '/orders/approved',
                    category: CLASS_APPROVED,
                    count: 0,
                    bg: "#337ab7"
                }
            ],
            items: [
                {
                    id: 1,
                    text: 'Revision',
                    path: '/orders/revision',
                    state: STATE_ORDER_REVISED,
                    count: 0,
                    bg: "#dff0d8",
                },
                {
                    id: 0,
                    text: 'Disputes',
                    path: '/orders/disputes',
                    state: STATE_ORDER_DISPUTED,
                    count: 0,
                    bg: "#dff0d8",
                    color: "#3c763d"
                },
                {id: 2, text: 'Notifications', path: '/notifications', count: 0, bg: "#dff0d8", color: "#3c763d"},
                {id: 3, text: 'Messages', path: '/messages', count: 0, bg: "#dff0d8", color: "#3c763d"}
            ],
        }
    }

    componentDidMount() {
        //Get order and set the state of corresponding item
        const {orders} = this.props;
        let items = [...this.state.dashboardItems];

        for (let i = 0; i < items.length; i++) {
            for (let j in orders) {
                if (orders.hasOwnProperty(j)) {
                    if (items[i].category === orders[j].information.class) {
                        items[i].count += 1;
                    }
                }
            }
        }

        this.setState({dashboardItems: items});
    }

    renderDashboardCards() {
        return this.state.dashboardItems.map(item => (
            <Col xs={12} md={3} key={item.id}>
                <Item text={item.text} count={item.count} icon={item.icon} bg={item.bg}/>
            </Col>
        ));
    }

    renderDashboardItems() {
        return this.state.items.map(item => (
            <Col xs={12} md={3} key={item.id}>
                <Item2 text={item.text} count={item.count} bg={item.bg} cl={item.color}/>
            </Col>
        ))
    }

    render() {
        return (
            <div>
                {this.renderDashboardCards()}
                {this.renderDashboardItems()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
};


export default withRouter(connect(mapStateToProps)(DashBoard));