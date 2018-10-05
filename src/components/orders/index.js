import React, {Component} from 'react';

import {
    Grid, Row, Col, HelpBlock
} from 'react-bootstrap';

//components
import Navbar from '../shared/navbar';
import Sidebar from './Sidebar';

//Forms
import Form1 from './Forms/Form1';
import Form2 from './Forms/Form2';
import Form3 from './Forms/Form3';
import Form4 from './Forms/Form4';
import Form5 from './Forms/Form5';

import {withRouter} from 'react-router-dom';
import Spinner from "../shared/loader";

import {connect} from 'react-redux';

import {init_current_order} from "../../actions/currentOrder";

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


    componentDidMount(){
        console.log("Component mounted");
        this.props.initialize_order();
    }


    render() {
        const {isLoading} = this.props;

        const form1 = (<div><h3>Paper Details</h3><Form1 onSubmit={(event) => this.handleSubmit(event, 1)}/></div>);
        const form2 = <Form2 onSubmit={this.handleForm1Submit}/>;
        const form3 = (<div><h3>3. PRICE CALCULATIONS</h3><Form3 onSubmit={this.handleForm1Submit}/></div>);
        const form4 = (<div><h3>4. ADDITIONAL FEATURES</h3><HelpBlock>Additional charges will be incurred for some of these features</HelpBlock><Form4 onSubmit={this.handleForm1Submit}/></div>);
        const form5 = (<Form5/>);

        const forms = [form1, form2, form3, form4, form5];

        const {activeIdx} = this.props;
        let formIdx = parseInt(activeIdx, 10);
        if (formIdx >= forms.length)
            formIdx = 0;
        const activeForm = forms[formIdx];


        return (
            <div className="orders">
                <Navbar/>
                <Grid>
                    <Row>
                        <Col xs={12} md={7}>
                            {isLoading ? <Spinner/> :activeForm}
                        </Col>
                        <Col xsHidden md={5}><Sidebar sidebar={this.state.sidebar} header="Our Exclusive offers"/></Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentOrder: state.currentOrder,
        activeIdx: state.ordersForm,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initialize_order: () => dispatch(init_current_order())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Orders));