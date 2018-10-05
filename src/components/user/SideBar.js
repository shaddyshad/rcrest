import React, {Component} from 'react';

import {
    Label, ListGroup, ListGroupItem,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {withRouter} from "react-router";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    updateModal = visible => {
        this.setState({visible});
        this.forceUpdate();
    };


    render() {
        const postOrder = `post-order`;
        const currPath = `/orders/current`;
        const pendPath = `/orders/pending`;
        const progPath = `/orders/progress`;
        const completePath = `/orders/completed`;
        const revPath = `/orders/revision`;
        const disPath = `/orders/disputes`;
        const archPath = `/orders/archives`;
        const acceptPath = `/orders/accepted`;
        return (
            <ListGroup style={{backgroundColor: "#eee"}}>
                <ListGroupItem>
                    <Link to="/home"><FontAwesomeIcon icon='tachometer-alt'/>Home</Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to="/post-order">
                        <FontAwesomeIcon icon='plus-circle'/> Post Order
                        <Label style={{float: 'right', backgroundColor: "#5bc0de", color: "#FFF"}}>new</Label>
                    </Link>
                </ListGroupItem>

                <ListGroupItem>
                    <Link to={currPath}>
                        <FontAwesomeIcon icon='server'/>Current Orders
                        <Label style={{backgroundColor: "#d9534f", color: "#FFF", float: 'right'}}>0</Label>
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    <Link to={completePath}>
                        <FontAwesomeIcon icon='stopwatch'/>Completed Orders
                        <Label style={{backgroundColor: "#5cb85c", color: "#FFF", float: 'right'}}>0</Label>
                    </Link>
                </ListGroupItem>
                <ListGroupItem> <Link to={progPath}><FontAwesomeIcon icon='spinner'/>In Progress</Link> </ListGroupItem>
                <ListGroupItem> <Link to={disPath}><FontAwesomeIcon icon='random'/>Disputed Orders</Link>
                </ListGroupItem>
                <ListGroupItem> <Link to={acceptPath}><FontAwesomeIcon icon='check-circle'/>Accepted Orders</Link>
                </ListGroupItem>
                <ListGroupItem> <Link to={archPath}><FontAwesomeIcon icon='check-circle'/>Archives</Link>
                </ListGroupItem>
            </ListGroup>
        );
    };
}


export default withRouter(SideBar);