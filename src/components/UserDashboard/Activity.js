import React, {Component} from 'react';

import {
    Grid,
    Col,
    Row,
    Panel,
    ProgressBar,
    Button,
    HelpBlock,
    Label
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Orders from "./Orders";

class Activity extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {onComplete} = this.props;
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={5}>
                            <Panel>
                                <Panel.Body>
                                    <FontAwesomeIcon icon='check-circle'/>
                                    <h4>You have an Incomplete Order</h4>
                                    <p>Progress</p>
                                    <ProgressBar now={60}/>
                                </Panel.Body>

                                <Panel.Footer>
                                    <Link to='/orders/4'><Button>Complete</Button></Link>
                                </Panel.Footer>
                            </Panel>
                        </Col>
                        <Col xs={12} md={5}>
                            <Panel>
                                <Panel.Heading>Overview</Panel.Heading>
                                <Panel.Body>
                                    <Label>10</Label>
                                    <HelpBlock>Orders Completed</HelpBlock>
                                    <Label>1</Label>
                                    <HelpBlock>Orders Pending</HelpBlock>
                                    <Label>2</Label>
                                    <HelpBlock>New Messages</HelpBlock>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={3}>
                            <h3>Recent</h3>
                            <HelpBlock>Recent Activity</HelpBlock>
                            <Orders orders={this.props.orders}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Activity