import React, {Component} from 'react';
import {Panel, Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import SideBar from './SideBar';
import DashBoard from "./DashBoard";


class Body extends Component {
    render() {
        // const Pend = (
        //     <div>
        //         <h3>Pending</h3>
        //         <Detail title="Pending" orders={this.props.pending}/>
        //     </div>
        // );
        //
        // const Prog = (
        //     <div>
        //         <h3>In Progress</h3>
        //         <Detail title="Progress"/>
        //     </div>
        // );
        //
        // const Complete = (
        //     <div>
        //         <h3>Complete</h3>
        //         <Detail title="Completed"/>
        //     </div>
        // );
        //
        // const Approved = (
        //     <div>
        //         <h3>Approved</h3>
        //         <Detail title="Approved"/>
        //     </div>
        // );
        //
        // const Revision = (
        //     <div>
        //         <h3>Revisions</h3>
        //         <Detail title="Revisions"/>
        //     </div>
        // );
        //
        // const Disputes = (
        //     <div>
        //         <h3>Disputes</h3>
        //         <Detail title="Disputed"/>
        //     </div>
        // );
        //
        // const Current = (
        //     <div>
        //         <h3>Current orders</h3>
        //         <Detail title="Current" orders={this.props.orders}/>
        //     </div>
        // );
        //
        // const Archive = (
        //     <div>
        //         <h3>Archives</h3>
        //         <Detail title="Archived"/>
        //     </div>
        // );
        //
        // const Accepted = (
        //     <div>
        //         <h3>Accepted Orders</h3>
        //         <Detail title="Accepted"/>
        //     </div>
        // );
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
                                    <h3>Clients Dashboard</h3>
                                    <hr/>
                                    <div>
                                        <DashBoard/>
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

export default withRouter(Body);