import React, {Component} from 'react';
import {Button, HelpBlock, ListGroup, ListGroupItem, Panel, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {database} from '../../firebase/firebase';
import {STATE_ORDER_COMPLETE, STATE_PROCESSING_PAYMENT} from "../../constants/currentOrder/information";

/*
* Give a detailed view of the order in sections
*
* */
class Order extends Component {

    state = {
        number: 126322,
        status: "COMPLETE",
        student: "asJHDShb",
        exec: true,
        discipline: "Virtual reality",
        deadline: Date.now().toLocaleString(),
        topic: "Murder cases",
        pages: 2,
        chats: 2,
        uploads: 0,
        writer: {name: "Hazy"},
        subject: "Hey Admin the lastnk ",
        orderID: "",
        order: {
            information: false
        },
        request: {
            discipline: '',
            topic: '',
            deadline: '',
            pages: 0
        }
    };

    componentDidMount() {
        const {match: {params: {id}}, history} = this.props;
        const order = this.props.orders[id];
        const {users:{student, writer}, messages, request} = order;
        database.ref('/requests/'+id).on("value", snapshot => {
            this.setState({order, orderID: id, writer, student, messages, request: {...request, ...snapshot.val()}});
        })

    }

    render() {
        const {order, writer, messages, student, request} = this.state;
        const {state} = order.information;
        console.log(order);
        return (
            <Panel>
                <Panel.Heading>
                    <HelpBlock>Order #: {this.state.orderID.substr(1, 5).toLowerCase()}</HelpBlock>
                    <HelpBlock>Status: {order ? order.information.class : "Unknown"}</HelpBlock>
                    {state !== STATE_PROCESSING_PAYMENT && state !== STATE_ORDER_COMPLETE ? <Link to={'/checkout/'+this.state.orderID}>Complete</Link> : null}
                </Panel.Heading>
                <Panel.Body>
                    <div>
                        <HelpBlock>Users</HelpBlock>
                        <HelpBlock>Student: <Link to={'/users/'+student.uid}>{student.uid}</Link></HelpBlock>
                        <HelpBlock>Writer: {this.state.writer ? <select>
                            <option>Select Writer</option>
                        </select> : "Not Assigned"}</HelpBlock>
                    </div>

                    <div>
                        <HelpBlock>Request</HelpBlock>
                        <Table>
                            <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Discipline:</td>
                                <td>{request.discipline} </td>
                            </tr>
                            <tr>
                                <td>Topic:</td>
                                <td>{request.topic} </td>
                            </tr>
                            <tr>
                                <td>Deadline:</td>
                                <td>{request.deadline} </td>
                            </tr>
                            <tr>
                                <td>Pages:</td>
                                <td>{request.pages} </td>
                            </tr>
                            </tbody>
                        </Table>
                        <HelpBlock><Link to={''}>View more</Link></HelpBlock>
                    </div>

                    <div>
                        <HelpBlock>Chats & Messages</HelpBlock>
                        <Panel>
                            <Panel.Heading>
                                <HelpBlock><Button onClick={this.toggleChats}> Chats:
                                    ({messages ? messages.length : 0})</Button> uploads: ({this.state.uploads}
                                </HelpBlock>

                                <ListGroup>
                                    <ListGroupItem>
                                        <Button>Start </Button>
                                        {messages ?
                                            <HelpBlock>From: {writer.name} ->
                                                To: <b>Me</b> Subject:{this.state.subject.substr(0, 10)}...</HelpBlock>
                                            : null}
                                    </ListGroupItem>
                                </ListGroup>
                            </Panel.Heading>
                        </Panel>
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(withRouter(Order));