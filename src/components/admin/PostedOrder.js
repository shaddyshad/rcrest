import React, {Component} from 'react';

import {
    ListGroup,
    ListGroupItem,
    Panel,
    Button,
    Grid,
    Row,
    Col
} from 'react-bootstrap';


class PostedOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {
                    id: 1,
                    publisher: 'Shad',
                    type: 'Computer Science',
                    pages: 3,
                    deadline: Date().toLocaleString(),
                    amount: 13
                },
                {
                    id: 2,
                    publisher: 'Shad',
                    type: 'Computer Science',
                    pages: 3,
                    deadline: Date().toLocaleString(),
                    amount: 13
                },
                {
                    id: 3,
                    publisher: 'Shad',
                    type: 'Computer Science',
                    pages: 3,
                    deadline: Date().toLocaleString(),
                    amount: 13
                }
            ]
        }
    }

    renderPosts() {
        const orders = [...this.state.orders];
        return orders.map(({id, publisher, type, pages, deadline, amount}) => (
            <ListGroupItem key={id}>
                <Grid>
                    <Row>
                        <Col xs={6} md={3}>User </Col>
                        <Col xs={6} md={3}>{publisher}</Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} md={3}>Type</Col>
                        <Col xs={6} md={3}>{type}</Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} md={3}>Pages</Col>
                        <Col xs={6} md={3}>{pages}</Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} md={3}>Deadline</Col>
                        <Col xs={6} md={3}>{deadline}</Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col xs={6} md={3}>Amount</Col>
                        <Col xs={6} md={3}>{amount}</Col>
                    </Row>
                    <hr/>
                </Grid>
                <Button>Details</Button>

            </ListGroupItem>
        ))
    }

    render() {
        return (
            <div>
                <ListGroup>
                    {this.renderPosts()}
                </ListGroup>
            </div>
        );
    }
}

const styles = {
    panel: {}
}

export default PostedOrder