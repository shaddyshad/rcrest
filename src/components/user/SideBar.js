import React from 'react';

import {
    ListGroupItem,
    ListGroup,
    Panel,
    } from 'react-bootstrap';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
    const postOrder = `post-order`;
    const currPath = `/orders/current`;
    const pendPath = `/orders/pending`;
    const progPath = `/orders/progress`;
    const completePath = `/orders/completed`;
    const revPath = `/orders/revision`;
    const disPath = `/orders/disputes`;
    const messagePath = `$messages`;
    const notifPath = `/notifications`;
    const archPath = `/orders/archives`;
    const acceptPath = `/orders/accepted`;


    return(
        <Panel>
            <Panel.Body>
        <ListGroup>
            <ListGroupItem>
                <Link to={'/accounts'}><FontAwesomeIcon icon='tachometer-alt'/>Home</Link>
            </ListGroupItem>
            <ListGroupItem><Link to={postOrder}><FontAwesomeIcon icon='plus-circle'/> Post Order</Link></ListGroupItem>
            <ListGroupItem> <Link to={currPath}><FontAwesomeIcon icon='server'/>Current Orders</Link> </ListGroupItem>
            <ListGroupItem> <Link to={pendPath}><FontAwesomeIcon icon='stopwatch'/>Pending Orders</Link> </ListGroupItem>
            <ListGroupItem> <Link to={progPath}><FontAwesomeIcon icon='spinner'/>In Progress</Link> </ListGroupItem>
            <ListGroupItem> <Link to={completePath}><FontAwesomeIcon icon='check-circle'/>Completed Orders</Link> </ListGroupItem>
            <ListGroupItem> <Link to={revPath}><FontAwesomeIcon icon='history'/>Completed Orders</Link> </ListGroupItem>
            <ListGroupItem> <Link to={disPath}><FontAwesomeIcon icon='random'/>Disputed Orders</Link> </ListGroupItem>
            <ListGroupItem> <Link to={acceptPath}><FontAwesomeIcon icon='check-circle'/>Accepted Orders</Link> </ListGroupItem>
            <ListGroupItem> <Link to={archPath}><FontAwesomeIcon icon='check-circle'/>Archives</Link> </ListGroupItem>
        </ListGroup>
            </Panel.Body>
            <Panel.Heading>
                <ListGroup>
                    <ListGroupItem> <Link to={messagePath}><FontAwesomeIcon icon='comment'/>Messages</Link> </ListGroupItem>
                    <ListGroupItem> <Link to={notifPath}><FontAwesomeIcon icon='bell'/>Notifications</Link> </ListGroupItem>
                    <ListGroupItem> <p>FAQs</p> </ListGroupItem>
                </ListGroup>
            </Panel.Heading>
        </Panel>
    );
};


export default SideBar;