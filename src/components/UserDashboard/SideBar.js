import React from 'react';

import {
    ListGroupItem,
    ListGroup,
    Panel,
    Button
} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = (props) => {
    return(
        <ListGroup>
            <ListGroupItem>
                <Link to='/users'>Home</Link>
            </ListGroupItem>
            <ListGroupItem>
                <p>Reseach Crest</p>
                <ListGroup>
                    <ListGroupItem> <Link to='/users/orders'>Orders</Link> </ListGroupItem>
                    <ListGroupItem> <Link to='/users/notifications'>Notifications</Link> </ListGroupItem>
                    <ListGroupItem> <Link to='/users'>Users</Link> </ListGroupItem>
                </ListGroup>
            </ListGroupItem>
            <ListGroupItem>
                <Panel>
                    <Panel.Body>
                        <strong>New Category</strong>
                        <FontAwesomeIcon icon='file'/>
                    </Panel.Body>
                    <Panel.Footer>
                        <Button>Learn More</Button>
                    </Panel.Footer>
                </Panel>
            </ListGroupItem>
        </ListGroup>
    );
}

export default SideBar;