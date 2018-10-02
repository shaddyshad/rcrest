import React, {Component} from 'react';

import {
    Grid, Row, Col, HelpBlock
} from 'react-bootstrap';

//components
import Navbar from '../shared/NavBar';
import Sidebar from './Sidebar';

//Forms
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';

import {Switch, Route, withRouter} from 'react-router-dom';
import Spinner from "../shared/Loader";

import {connect} from 'react-redux';

import {changeOrderProperty, changePaperDetailsProperty} from '../../actions';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: [
                {text: 'Free pages including references and front page', icon: 'file'},
                {text: 'English-Native writers', icon: 'graduation-cap'},
                {text: 'Only original and authentic papers', icon: 'shield-alt'},
                {text: 'Request for revisions anytime', icon: 'edit'},
                {text: 'Quality work guaranteed', icon: 'certificate'},
                {text: 'Comprehensive money back policy', icon: 'dollar-sign'},
                {text: 'Easy messaging and communication', icon: 'comment'},
                {text: 'Responsive support team', icon: 'futbol'}
            ],
            loaderShown: false
        };
    }


    handleFormChange = (key, value) => {
        console.log(`Updating ${key} with ${value}`);
        this.props.changeOrderProperty(key, value);
        // this.setState({[key]: value})
    };

    handleForm1Submit = (event, idx) => {
        event.preventDefault();
    };

    handleLoginClick = (event) => {
        const {history} = this.props;
        console.log(history.location.pathname);
        if (history.location.pathname === '/login')
            history.push('/login');
        else
            this.setState(
                {loaderShown: true}, () => {
                    setTimeout(() => {
                        history.push('/login');
                        this.setState({loaderShown: false});
                    }, 1000)
                }
            )
    };


    render() {
        const {sources, topic, format, instructions, pages, writer_id: writerId, discount_code: discountCode, amount} = this.props.currentOrder;
        const {loaderShown} = this.state;

        const form1 = (<div><h3>Paper Details</h3><Form1
                    onSubmit={(event) => this.handleSubmit(event, 1)}/></div>);
        const form2 = <Form2 onSubmit={this.handleForm1Submit}/>;
        const form3 = (<div><h3>3. PRICE CALCULATIONS</h3><Form3 onSubmit={this.handleForm1Submit}/></div>);
        const form4 = (<div><h3>4. ADDITIONAL FEATURES</h3><HelpBlock>Additional charges will be incurred for some of these features</HelpBlock><Form4 onSubmit={this.handleForm1Submit}/></div>);
        const form5 = (<Form5/>);

        const forms = [form1, form2, form3, form4, form5];

        const {activeIdx} = this.props;
        let formIdx = parseInt(activeIdx);
        if (formIdx >= forms.length)
            formIdx = 0;
        const activeForm = forms[formIdx];


        return (
            <div className="orders">
                <Navbar onLogin={this.handleLoginClick}/>
                {loaderShown ? <Spinner/> : <Grid>
                    <Row>
                        <Col xs={12} md={7}>
                            {activeForm}
                        </Col>
                        <Col xsHidden md={5}><Sidebar sidebar={this.state.sidebar} header="Our Exclusive offers"/></Col>
                    </Row>
                </Grid>}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentOrder: state.currentOrder,
        activeIdx: state.ordersForm.activeIdx
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeOrderProperty: (key, value) => dispatch(changeOrderProperty(key, value)),
        changePaperDetailsProperty: (key, value) => dispatch(changePaperDetailsProperty(key, value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));