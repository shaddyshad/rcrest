import React, {Component} from 'react';

import {
    Grid, Row, Col, HelpBlock
} from 'react-bootstrap';

//components
import Navbar from '../Common/NavBar';
import Sidebar from './Sidebar';

//Forms
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';

class Orders extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: '',
            sources: '',
            topic: '',
            format: '',
            instructions: '',
            academic_level: '',
            pages: '',
            spacing: '',
            deadline: '',
            work: '',
            writer_id: '',
            digital_copies: false,
            discount_code: '',
            amount: 0,
            sidebar: [
                {text: 'Free pages including references and front page', icon: 'file'},
                {text: 'English-Native writers', icon: 'graduation-cap'},
                {text: 'Only original and authentic papers', icon: 'shield-alt'},
                {text: 'Request for revisions anytime', icon: 'edit'},
                {text: 'Quality work guaranteed', icon: 'certificate'},
                {text: 'Comprehensive money back policy', icon: 'dollar-sign'},
                {text: 'Easy messaging and communication', icon: 'comment'},
                {text: 'Responsive support team', icon: 'futbol'}
            ]
        };
    }

    handleFormChange = (key, value) => {
        this.setState({key: value})
    };

    handleForm1Submit = (event) => {
        event.preventDefault();
    };


    render(){
        const {sources, topic, format, instructions,pages, writer_id, discount_code, amount} = this.state;
        const form1 = <div><h3>Paper Details</h3><Form1
            sources={sources}
            topic={topic}
            format={format}
            onTypeChange={(event) => this.handleFormChange('type', event.target.key)}
            onSourcesChange={(event) => this.handleFormChange('sources', event.target.key)}
            onFormatChange={(event) => this.handleFormChange('format', event.target.key)}
            onTopicsChange={(event) => this.handleFormChange('topic', event.target.key)}
            onSubmit={this.handleSubmit}
        /></div>;
        const form2 = <Form2
            instructions={instructions}
            onFieldChange={(event) => this.handleFormChange('instructions', event.target.value)}
            onSubmit={this.handleForm1Submit}
        />;

        const form3 = (
            <div>
                <h3>3. PRICE CALCULATIONS</h3>
                <Form3
                    pages={pages}
                    amount={amount}
                    onPageChange={(event) => this.handleFormChange('pages', event.target.value)}
                    onSubmit={this.handleForm1Submit}
                    onLevelChange={(event) => this.handleFormChange('level', event.target.value)}
                    onSpacingChange={(event) => this.handleFormChange('spacing', event.target.value)}
                    onDeadlineChange={(event) => this.handleFormChange('deadline', event.target.value)}
                    onTypeChange={(event) => this.handleFormChange('work', event.target.value)}
                />
            </div>
        );

        const form4 = (
            <div>
                <h3>4. ADDITIONAL FEATURES</h3>
                <HelpBlock>Additional charges will be incurred for some of these features</HelpBlock>
                <Form4
                    discount={discount_code}
                    writer_id={writer_id}
                    amount={amount}
                    onIdChange={(event) => this.handleFormChange('writer_id', event.target.value)}
                    onCodeChange={(event) => this.handleFormChange('discount_code', event.target.event)}
                    onRadioChange={(event) => this.handleFormChange('discount_code', event.target.event)}
                    onSubmit={this.handleForm1Submit}
                />
            </div>
        );

        const form5 = (<Form5/>);
        return (
            <div className="orders">
                <Navbar/>
                <Grid>
                    <Row>
                        <Col xs={12} md={7}>
                            {form5}
                        </Col>
                        <Col xsHidden md={5}><Sidebar sidebar={this.state.sidebar} header="Our Exclusive offers"/></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Orders