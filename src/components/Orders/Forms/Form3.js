// Price calculation form
import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    HelpBlock, Checkbox, Radio
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

class Form1 extends Component {
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

    render() {
        const {pages, onPageChange, onSubmit, onLevelChange, onSpacingChange,onDeadlineChange, onTypeChange, amount} = this.props;

        return (
            <Form>

                <FormGroup onChange={onLevelChange}>
                    <ControlLabel>Academic Level</ControlLabel>
                    <Checkbox inline value="HIGH_SCHOOL">High School</Checkbox>
                    <Checkbox inline value="UNDERGRADUATE">Undergraduate</Checkbox>{' '}
                    <Checkbox inline value="MASTERS">Master</Checkbox>
                    <Checkbox inline value="DOCTORAL">Doctoral</Checkbox>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Pages</ControlLabel>
                    <FormControl
                        type="text"
                        value={pages}
                        onChange={onPageChange}
                    />
                </FormGroup>

                <FormGroup onChange={onSpacingChange}>
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
                        defaultValue="History"
                        onChange={onDeadlineChange}
                    >
                        {this.renderDeadline()}
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="basic-paper">
                    <ControlLabel>Deadline</ControlLabel>
                    <FormControl
                        componentClass="select"
                        defaultValue="Article"
                        onChange={onTypeChange}
                    >
                        {this.renderTypes()}
                    </FormControl>
                </FormGroup>



                <HelpBlock>Amount: {amount}</HelpBlock>
                {this.props.hideButton ? null : <Link to='/orders/3'><Button>Next</Button></Link>}

            </Form>
        );
    }
}

export default Form1