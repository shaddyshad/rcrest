import React, {Component} from 'react';

//Components
import {
    Grid,
    Row, HelpBlock, Col
} from 'react-bootstrap';

import Value from './Value'

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
                text: 'After you have paid for your order, we will receive it and its status will show as "Under Review". At this stage of your order, we review it to determine the most qualified writer to handle it. We then assign it and the status changes to "In Progress", the stage during which you can chat with the writer to monitor the order\'s progress.'
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
        return process.map(item =>
            <Col xs={12} md={3}>
                <Value header={item.header} icon={item.icon} text={item.text}/>
            </Col>
        )
    }

    render(){
        return (
            <div>
                <h3>How Do I Get My Paper Done at Research Paper Crest?</h3>
                <HelpBlock>We have the privilege of dealing with the most professional writers ever.</HelpBlock>
                <Grid>
                    <Row className="show-grid">
                        {this.renderProcess()}
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ProcessList