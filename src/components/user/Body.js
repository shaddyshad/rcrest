import React, {Component} from 'react';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import SideBar from './SideBar';
import DashBoard from "./DashBoard";
import Listing from "./listing";
import Detail from "./detail";
import Checkout from "./checkout";

class Body extends Component {
    getScreen(){
        switch (this.props.screen) {
            case '':
            default:
                return <DashBoard/>;
            case 'listing':
                //Authentication mechanisms
                return <Listing/>;
            case 'detail':
                //Auth
                return <Detail/>;
            case 'checkout':
                //Checkout
                return <Checkout/>

        }
    }


    render() {
        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xsHidden md={3}>
                            <SideBar/>
                        </Col>
                        <Col xs={3} md={9}>
                            <Panel>
                                <Panel.Body>
                                    <h3 style={{fontWeight: 'bold', color: "#000"}}>Clients Dashboard</h3>
                                    <hr/>
                                    <div>
                                        {this.getScreen()}
                                    </div>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}



export default Body;