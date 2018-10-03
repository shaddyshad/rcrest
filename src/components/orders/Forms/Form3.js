// Price calculation form
import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    Checkbox, Radio
} from 'react-bootstrap';

import {connect} from 'react-redux';
import {changeActiveForm,} from '../../../actions/index';
import {PAGES, SPACING, TYPE, DEADLINE, ACADEMIC_LEVEL} from "../../../constants/fieldNames";
import {editProperty} from "../../../actions/currentOrder/request";


const mapStateToProps = state => {
    return {
        order: state.currentOrder
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePage: idx => dispatch(changeActiveForm(idx)),
        changeProp: (key, value) => dispatch(editProperty(key, value))
    }
};

class Form3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadlines: [
                {amount: 1.2, text: "6 Hours", value: "6_HOURS"},
                {amout: 1.2, text: "12 Hours", value: "12_HOURS"},
                {amount: 1.0, text: "1 Day", value: "1_DAY"},
                {amount: 0.95, text: "2 Days", value: "2_DAYS"},
                {amount: 0.9, text: "3 Days", value: "3_DAYS"},
                {amount: 0.85, text: "4 Days", value: "4_DAYS"},
                {amount: 0.8, text: "5 Days", value: "5_DAYS"},
                {amount: 0.75, text: "7 Days", value: "7_DAYS"},
                {amount: 0.7, text: "14 Days", value: "14_DAYS"},
                {amount: 0.5, text: "30 Days", value: "30_DAYS"}
            ],
            types: [
                {text: 'Admission / Application Essay', amount: 11.000001, value: 'ADMISSION_APPLICATION_ESSAY'},
                {text: 'Annotated Bibliography', amount:11.000002, value:'ANNOTATED_BIBLIOGRAPHY' },
                {text: 'Article', amount: 11.000003, value: 'ARTICLE'},
                {text: 'Assignment', amount: 11.000004, value: 'ASSIGNMENT'},
                {text: 'Boot Report / Review', amount: 11.000005, value: 'BOOK_REPORT_REVIEW'},
                {text: 'Case Study', amount: 11.00006, value: 'CASE_STUDY'}
            ]
        };
    }


    renderDeadline(){
        const deadlines = [...this.state.deadlines];
        return deadlines.map(({amount, text, value}) => <option value={value} key={amount}>{text}</option> )
    }

    renderTypes(){
        const types = [...this.state.types];
        return types.map(({amount, text, value}) => <option value={value} key={amount}>{text}</option>)
    }

    // setDeadline = (key, value) => {
    //     switch (value) {
    //         case "14_DAY":
    //             const deadline = Date.now();
    //             return;
    //         default:
    //             const d = Date.now();
    //     }
    // };

    render() {
        const {order, onSubmit, changePage, changeProp} = this.props;

        // const isChecked = (key, val) => key === val;

        return (
            <Form onSubmit={onSubmit}>

                <FormGroup onChange={(event) => changeProp(ACADEMIC_LEVEL, event.target.value)}>
                    <ControlLabel>Academic Level</ControlLabel>
                    <Checkbox inline value="HIGH_SCHOOL">High School</Checkbox>
                    <Checkbox inline value="UNDERGRADUATE" checked>Undergraduate</Checkbox>{' '}
                    <Checkbox inline value="MASTERS">Master</Checkbox>
                    <Checkbox inline value="DOCTORAL">Doctoral</Checkbox>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Pages</ControlLabel>
                    <FormControl
                        type="text"
                        value={order.pages}
                        onChange={(event) => changeProp(PAGES, event.target.value)}
                    />
                </FormGroup>

                <FormGroup onChange={(event) => changeProp(SPACING, event.target.value)}>
                    <ControlLabel>Spacing</ControlLabel>
                    <Radio name="radioGroup" value="SINGLE" inline>
                        Single
                    </Radio>{' '}
                    <Radio name="radioGroup" value="DOUBLE" inline>
                        Double
                    </Radio>{' '}
                </FormGroup>
                <FormGroup controlId="basic-paper">
                    <ControlLabel>Deadline</ControlLabel>
                    <FormControl
                        componentClass="select"
                        defaultValue="14_DAYS"
                        onChange={(event) => changeProp(DEADLINE, event.target.value)}
                    >
                        {this.renderDeadline()}
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="basic-paper">
                    <ControlLabel>Type</ControlLabel>
                    <FormControl
                        componentClass="select"
                        defaultValue="Article"
                        onChange={(event) => changeProp(TYPE, event.target.value)}
                    >
                        {this.renderTypes()}
                    </FormControl>
                </FormGroup>


                {this.props.hideButton ? null : <Button onClick={() => changePage(3)}>Next</Button>}

            </Form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form3);