import React, {Component} from 'react';

//Components
import {
    Grid,
    Row, HelpBlock, Col
} from 'react-bootstrap';

import Value from './values/Value'

class ProcessList extends Component{

    state = {
        process: [
            {
                icon: 'file',
                header: 'Fill the order form',
                text: 'Click on the order button and provide the details requested. These include all the details and instructions pertaining to your order. At the last step, you will be required to input your email address and a password you can easily remember.'
            },
            {
                icon: 'dollar-sign',
                header: 'Make Payment',
                text: 'After filling the order form and inputting your email and password, just click on "Submit Order". You will be redirected to PayPal where you can make payment for your order. You don\'t have to have an account with PayPal to make your payment; you can pay through PayPal using your credit card.'
            },
            {
                icon: 'user',
                header: 'We assign your order',
                text: 'After you have paid for your order, we will receive it and its status will show as "Under Review". At this stage of your order, we review it to determine the most qualified writer to handle it. We then assign it and the status changes to "In Notifications", the stage during which you can chat with the writer to monitor the order\'s progress.'
            },
            {
                icon: 'envelope-open-text',
                header: 'Receive your paper',
                text: 'Our writers and customer support representatives are up and running at all hours to meet your academic needs. Each request is handled by a knowledgeable team member. So if you require any help, reach out to us via phone, email and live chat.'
            }
        ]
    };

    renderProcess(){
        const {process} = this.state;
        return process.map((item, idx) =>
            <Col xs={12} md={3} key={idx}>
                <Value header={item.header} icon={item.icon} text={item.text}/>
            </Col>
        )
    }

    render(){
        return (
            <div style={styles.outline}>
                <h3 style={styles.header}>How Do I Get My Paper Done at Research Paper Crest?</h3>
                <HelpBlock style={styles.block}>We have the privilege of dealing with the most professional writers ever.</HelpBlock>
                <Grid>
                    <Row className="show-grid">
                        {this.renderProcess()}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const styles = {
    outline: {
        border: '1px solid black'
    },
    header: {
        fontSize: 40,
        margin: '1em 0',
        color: '#000',
        font: '600 28px/1.25 Roboto Mono, monospace'
    },
    block: {
        marginBottom: 60,
        fontSize: 20
    }
}

export default ProcessList