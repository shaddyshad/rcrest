import React, {Component} from 'react';

import {
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

import Item from './Item';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.sidebar
        }
    }

    renderSideBar() {
        const items = [...this.state.items];
        return items.map((item, idx) => (
            <ListGroupItem key={idx}>
                <Item text={item.text} icon={item.icon}/>
            </ListGroupItem>
        ))
    }

    render() {
        const {header} = this.props;
        return (
            <div>
                <h2>{header}</h2>
                <ListGroup>
                    {this.renderSideBar()}
                </ListGroup>
            </div>
        );
    }
}

export default Sidebar;