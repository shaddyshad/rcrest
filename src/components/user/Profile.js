import React, {Component} from 'react';

import {
    Panel,
    Grid,
    Row,
    Col,
    Image,
    HelpBlock,
    Table,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xsHidden md={3}>
                            <Image thumbnail src='images/boy.png'/>
                        </Col>
                        <Col xs={12} md={3}>
                            <h3>Email here</h3>
                            <code>Write something about yourself</code>
                        </Col>
                        <Col xs={12} md={4}>
                            <Panel>
                                <Panel.Body>
                                    <Table>
                                        <tr><th>10</th><th>10</th><th>2</th></tr>
                                        <tr><th><HelpBlock>Orders</HelpBlock></th><th><HelpBlock>Transactions</HelpBlock></th><th><HelpBlock>New Messages</HelpBlock></th></tr>
                                    </Table>
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon='map-marker-alt'/>
                                            <HelpBlock>Location: </HelpBlock>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon='history'/>
                                            <HelpBlock>Member for 1 month</HelpBlock>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon='clock'/>
                                            <HelpBlock>Last seen: 10 minutes ago</HelpBlock>
                                        </li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Profile;