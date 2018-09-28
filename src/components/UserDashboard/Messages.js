import React, {Component} from 'react';

import {
    HelpBlock,
    Panel,
    Button
} from 'react-bootstrap';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {subject: "Easy man",text: "Hey man", from: "Support", to: "Me", time: "Aug 10 17:32:23", order_id: 23}
            ],
            shown: false
        }
    }

    renderNotification() {
        const {messages} = this.state;
        return messages.map(({subject, text, from, order_id, to, time}) => (
            <Panel onClick={() => {this.setState({shown: !this.state.shown})}}>
                <Panel.Heading>
                    <HelpBlock>
                        <strong>From: {from} -> To: {to} ({time})</strong><span style={{float:'right'}}>ORDER #{order_id}</span>
                    </HelpBlock>
                </Panel.Heading>
                <Panel.Body style={this.state.shown ? {display: 'block'} : {display: 'none'}}>
                    <HelpBlock><u><b>{subject}</b></u></HelpBlock>
                    <HelpBlock>{text}</HelpBlock>

                    <Button >Reply</Button>
                </Panel.Body>
            </Panel>
        ));
    }

    render() {
        return (
            <div>
                <h3>Messages</h3>
                <Panel>
                    <Panel.Heading>
                        <Button>Create a message</Button>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.state.messages.length > 0 ? this.renderNotification() :
                            <HelpBlock>No Messages yet</HelpBlock>}
                    </Panel.Body>
                </Panel>
            </div>

        );
    }
}

export default Notifications