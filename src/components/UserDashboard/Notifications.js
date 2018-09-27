import React, {Component} from 'react';

import {
    Well,
    HelpBlock
} from 'react-bootstrap';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    renderNotification(){
        const {notifications} = this.state;
        return notifications.map(({text}) => <Well>{text}</Well>)
    }

    render() {
        return (
            <div>
                <h3>Notifications</h3>
                {this.state.notifications.length > 0 ? this.renderNotification() : <HelpBlock>No notifications yet</HelpBlock>}
            </div>

        );
    }
}

export default Notifications