import React, {Component} from 'react';

import {
    Panel,
    Grid,
    Row,
    Col,
    Breadcrumb,
    BreadcrumbItem
} from 'react-bootstrap';

import {withRouter, Switch, Route} from 'react-router-dom';

import SideBar from './SideBar';
import Activity from './Activity';
import Profile from "./Profile";
import Item from "./Item";

import Detail from './Detail';
import Notifications from './Notifications';
import Messages from './Messages';
import Post from './Post';

import {connect} from 'react-redux';


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {id: 1, type: 'Computer Science', pages: 3, amount: 36.5, writer_id: "HSD827H123", status: 'Complete'}
            ],
            items: [
                {id: 1, text: 'Revision', path: '/orders/revision'},
                {id: 0, text: 'Disputes', path: '/orders/disputes'},
                {id: 2, text: 'Notifications', path: '/notifications'},
                {id: 3, text: 'Messages', path: '/messages'}
            ],
            dashboardItems: [
                {id: 1, text: 'Pending', icon: 'server', path: '/orders/pending', key: 'pending'},
                {id: 2, text: 'In Notifications', icon: 'list-ul', path: '/orders/progress'},
                {id: 3, text: 'Completed', icon: 'check-square', path: '/orders/completed'},
                {id: 4, text: 'Approved', icon: 'money-bill', path: '/orders/approved'}
            ],

            breadcrumbs: []
        }
    }

    componentDidMount() {
        const {history} = this.props;
        const breadcrumbs = [...this.state.breadcrumbs, {href: history.location.pathname, text: 'Home'}];
        this.setState({breadcrumbs});
    }

    renderMenu() {
        const {items} = this.state;

        return items.map(({id, text, path}) => (
            <Col xsHidden md={3} key={id}><Item text={text} path={path} onClick={() => this.handleClick(path)}/></Col>
        ));
    }

    renderItems() {
        const {dashboardItems} = this.state;

        return dashboardItems.map(({id, text, icon, path}) => (
            <Col xs={12} md={3} key={id}>
                <Item text={text} icon={icon} path={path} onClick={() => this.handleClick(path)}/>
            </Col>
        ))
    }

    handleClick = (path) => {
        const d = path.split('');
        const entry = d[d.length - 1];
        let breadcrumbs = [...this.state.breadcrumbs];
        while(breadcrumbs.length > 1)
            breadcrumbs.pop();
        breadcrumbs = [...breadcrumbs, {href: path, text: entry}];
        const {history} = this.props;
        const {homepage} = this.props;
        const e = `${homepage}${path}`;
        history.push(e);
        this.setState({breadcrumbs});
    };

    handleLinkClick = (path) => {
        let breadcrumbs = [...this.state.breadcrumbs];
        if (breadcrumbs.length !== 1)
            breadcrumbs.pop();
        breadcrumbs = [...breadcrumbs, {href: path, text: path}];
        this.setState({breadcrumbs});
    };

    getScreen() {
        const screens = [
            <Activity orders={this.state.orders} user={this.props.user}/>,
            <Profile user={this.props.user}/>
        ];
        const {activeScreen} = this.state;
        return screens[activeScreen];
    }

    renderBreadcrumbs() {
        const {breadcrumbs} = this.state;
        return breadcrumbs.map(({text, href}, idx) => (<BreadcrumbItem key={idx} href={href}>{text}</BreadcrumbItem>))
    }

    getHomePageLink() {
        const {history} = this.props;
        const path = `${history.location.pathname.split('/').slice(0, 3).join('/')}`;
        console.log(path);
        return path;

    }


    render() {
        const defaultScreen = (
            <div>
                {this.renderItems()}
                {this.renderMenu()}
            </div>
        );

        const Pend = (
            <div>
                <h3>Pending</h3>
                <Detail title="Pending" orders={this.props.pending}/>
            </div>
        );

        const Prog = (
            <div>
                <h3>In Progress</h3>
                <Detail title="Progress"/>
            </div>
        );

        const Complete = (
            <div>
                <h3>Complete</h3>
                <Detail title="Completed"/>
            </div>
        );

        const Approved = (
            <div>
                <h3>Approved</h3>
                <Detail title="Approved"/>
            </div>
        );

        const Revision = (
            <div>
                <h3>Revisions</h3>
                <Detail title="Revisions"/>
            </div>
        );

        const Disputes = (
            <div>
                <h3>Disputes</h3>
                <Detail title="Disputed"/>
            </div>
        );

        const Current = (
            <div>
                <h3>Current orders</h3>
                <Detail title="Current" orders={this.props.orders}/>
            </div>
        );

        const Archive = (
            <div>
                <h3>Archives</h3>
                <Detail title="Archived"/>
            </div>
        );

        const Accepted = (
            <div>
                <h3>Accepted Orders</h3>
                <Detail title="Accepted"/>
            </div>
        );




        return (
            <div>
                <Grid fluid>
                    <Row>
                        <Col xsHidden md={3}>
                            <SideBar home={this.getHomePageLink()} onClick={this.handleLinkClick}/>
                        </Col>
                        <Col xs={3} md={9}>
                            <Panel>
                                <Panel.Body>
                                    <h3>Clients Dashboard</h3>
                                    <hr/>
                                    <Breadcrumb>
                                        {this.renderBreadcrumbs()}
                                    </Breadcrumb>
                                    <Switch>
                                        <Route exact path='/accounts/orders/pending' children={Pend}/>
                                        <Route exact path='/accounts' children={defaultScreen}/>
                                        <Route exact path='/accounts/orders/progress' children={Prog}/>
                                        <Route exact path='/accounts/orders/completed' children={Complete}/>
                                        <Route exact path='/accounts/orders/approved' children={Approved}/>
                                        <Route exact path='/accounts/orders/revision' children={Revision}/>
                                        <Route exact path='/accounts/orders/disputes' children={Disputes}/>
                                        <Route exact path='/accounts/orders/accepted' children={Accepted}/>
                                        <Route exact path='/accounts/orders/archives' children={Archive}/>
                                        <Route exact path='/accounts/orders/current' children={Current}/>
                                        <Route exact path='/accounts/notifications' component={Notifications}/>
                                        <Route exact path='/accounts/messages' component={Messages}/>
                                        <Route exact path='/accounts/orders/post' component={Post}/>
                                    </Switch>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //pending
    return ({
        homepage: state.path,
        orders: state.orders
    })

};


export default connect(mapStateToProps)(withRouter(Body));