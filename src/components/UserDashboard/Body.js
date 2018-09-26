import React, {Component} from 'react';

import {
    Panel,
    Grid,
    Row,
    Col,
} from 'react-bootstrap';

import SideBar from './SideBar';
import Activity from './Activity';
import Profile from "./Profile";


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {id: 1, type: 'Computer Science', pages: 3, amount: 36.5, writer_id: "HSD827H123", status: 'Complete'}
            ],
            items: [
                {id: 1, text: 'Profile'},
                {id: 0, text: 'Activity'},
                {id: 2, text: 'Settings'}
            ],
            activeScreen: 0
        }
    }

    renderMenu() {
        const {items} = this.state;

        return items.map(({id, text}) => (
            <Col xsHidden md={2} key={id}><p onClick={() => this.handleClick(id)}>{text}</p></Col>
        ));
    }

    handleClick = (id) => {
        this.setState({activeScreen: id})
    };

    getScreen(){
        const screens = [<Activity orders={this.state.orders} user={this.props.user}/>, <Profile user={this.props.user}/>];
        const {activeScreen} = this.state;
        return screens[activeScreen];
    }


    render() {
        const {user: {email}} = this.props;
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xsHidden md={3}>
                            <SideBar/>
                        </Col>
                        <Col xs={3} md={9}>
                            <Panel>
                                <Panel.Heading>
                                    <Row>
                                        {this.renderMenu()}
                                        <Col xsHidden md={2}>{email}</Col>
                                    </Row>
                                </Panel.Heading>
                                <Panel.Body>
                                    {this.getScreen()}
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Body