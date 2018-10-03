import React, {Component} from 'react';
import {
    CLASS_APPROVED,
    CLASS_IN_PROGRESS,
    CLASS_ORDER_CLOSED,
    CLASS_PENDING, STATE_ORDER_DISPUTED, STATE_ORDER_REVISED
} from "../../constants/currentOrder/information";
import Item from "./Item";
import {Col} from "react-bootstrap";
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardItems: [
                {id: 1, text: 'Pending', icon: 'server', path: '/orders/pending', category: CLASS_PENDING, count: 0},
                {
                    id: 2,
                    text: 'In Progress',
                    icon: 'list-ul',
                    path: '/orders/progress',
                    category: CLASS_IN_PROGRESS,
                    count: 0
                },
                {
                    id: 3,
                    text: 'Completed',
                    icon: 'check-square',
                    path: '/orders/completed',
                    category: CLASS_ORDER_CLOSED,
                    count: 0
                },
                {
                    id: 4,
                    text: 'Approved',
                    icon: 'money-bill',
                    path: '/orders/approved',
                    category: CLASS_APPROVED,
                    count: 0
                }
            ],
            items: [
                {id: 1, text: 'Revision', path: '/orders/revision', state: STATE_ORDER_REVISED, count: 0},
                {id: 0, text: 'Disputes', path: '/orders/disputes', state: STATE_ORDER_DISPUTED, count: 0},
                {id: 2, text: 'Notifications', path: '/notifications', count: 0},
                {id: 3, text: 'Messages', path: '/messages', count: 0}
            ],
        }
    }

    componentDidMount() {
        //Get order and set the state of corresponding item
        const {orders} = this.props;
        let items = [...this.state.dashboardItems];
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < orders.length; j++) {
                if (items[i].category === orders[j].information.class) {
                    items[i].count += 1;
                }
            }
        }

        this.setState({dashboardItems: items});
    }

    renderDashboardCards() {
        return this.state.dashboardItems.map(item => (
            <Col xs={12} md={3} key={item.id}>
                <Link to={'/orders/'+item.category.toLowerCase()}>
                    <Item text={item.text} count={item.count} icon={item.icon}/>
                </Link>
            </Col>
        ));
    }

    renderDashboardItems() {
        return this.state.items.map(item => (
            <Col xs={12} md={3} key={item.id}>
                <Item text={item.text} count={item.count} icon={null}/>
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

export default connect(mapStateToProps)(withRouter(DashBoard));