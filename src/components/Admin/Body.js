import React, {Component} from 'react';

import {
    Grid,
    Row,
    Col,
} from 'react-bootstrap';

import Sidebar from "../Orders/Sidebar";
import MenuPanel from './MenuPanel';
import PostedOrder from './PostedOrder';

class Body extends Component {

    state = {
        sidebar: [
            {text: 'Dashboard', icon: ''},
            {text: 'Orders', icon: ''},
            {text: 'Orders on bid', icon: ''},
            {text: 'Users', icon: ''},
            {text: 'Feedback', icon: ''},
            {text: 'Samples', icon: ''},
            {text: 'Blog', icon: ''},
            {text: 'SEO pages', icon: ''}
        ],
        body: [
            {text: 'POSTED ORDERS', value: 200},
            {text: 'ORDERS IN PROGRESS', value: 200},
            {text: 'COMPLETED ORDERS', value: 200},
            {text: 'PAYPAL DEBITS', value: 200},
            {text: 'REVISION', value: 200},
            {text: 'DISPUTES', value: 200},
            {text: 'NEW NOTIFICATION(S)', value: 200},
            {text: 'NEW MESSAGE(S)', value: 200}
        ]
    };

    renderRow(list) {
        return list.map(({text, value}) => (
            <Col xs={12} md={4}>
                <MenuPanel text={text} value={value}/>
            </Col>
        ));
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xsHidden md={3}>
                        <Sidebar sidebar={this.state.sidebar}/>
                    </Col>
                    <Col xs={12} md={9}>
                        <Row>
                            {this.renderRow(this.state.body.slice(0, 3))}
                        </Row>
                        <Row>
                            {this.renderRow(this.state.body.slice(3, 6))}
                        </Row>
                        <Row>
                            {this.renderRow(this.state.body.slice(6))}
                        </Row>

                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default Body