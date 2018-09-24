import React, {Component} from 'react';
import {
    Form,
    FormControl,
    Button,
    FormGroup
} from "react-bootstrap";

class CallToActionForm extends Component{

    state = {
        email: '',
        file: ''
    };

    handleStateChange = (e) => {
        this.setState({file: e.target.value})
    };

    render() {
        return (
            <Form inline>
                <h3>See if we can write your paper now.</h3>
                <FormGroup controlId="formInlineEmail">
                    <FormControl type="email" placeholder="Enter Email" value={this.state.email}/>
                    <FormControl.Feedback />
                </FormGroup>{' '}
                <FormGroup controlId="formInlineName">
                    <FormControl
                        componentClass="select"
                        defaultValue="11.0000019"
                        onChange={this.handleStateChange}
                    >
                        < option value="11.000001"> Admission / Application Essay </option>
                        <option value="11.000002">Annotated Bibliography</option>
                        <option value="11.000003"> Article </option>
                        <option value="11.000004">Assignment</option>
                        <option value="11.000005"> Book Report / Review </option>
                        <option value="11.000006">Case Study</option>
                        <option value="11.000007"> Coursework </option>
                        <option value="11.000008">Dissertation</option>
                        <option value="11.000009"> Dissertation Chapter - Abstract </option>
                        <option value="11.0000011">Dissertation Chapter - Introduction Chapter</option>
                        <option value="11.0000012"> Dissertation Chapter - Literature Review </option>
                        <option value="11.0000013">Dissertation Chapter - Methodology</option>
                        <option value="11.0000014"> Dissertation Chapter - Results </option>
                        <option value="11.0000015">Dissertation Chapter - Discussion</option>
                        <option value="11.0000016"> Dissertation Chapter - Hypothesis </option>
                        <option value="11.0000017">Dissertation Chapter - Conclusion Chapter</option>
                        <option value="11.0000018"> Editing </option>
                        <option value="11.0000019" >Essay</option>
                        <option value="11.00000111"> Formatting </option>
                        <option value="11.00000112">Lab Report</option>
                        <option value="11.00000113"> Math Problem </option>
                        <option value="11.00000114">Movie Review</option>
                        <option value="11.00000115"> Personal Statement </option>
                        <option value="11.00000116">PowerPoint Presentation plain</option>
                        <option value="11.00000117"> PowerPoint Presentation with accompanying text </option>
                        <option value="11.00000118">Proofreading</option>
                        <option value="11.00000119"> Paraphrasing </option>
                        <option value="11.000001111">Research Paper</option>
                        <option value="11.000001112"> Research Proposal </option>
                        <option value="11.000001113">Scholarship Essay</option>
                        <option value="11.000001114"> Speech / Presentation </option>
                        <option value="11.000001115">Statistics Project</option>
                        <option value="11.000001116"> Term Paper </option>
                        <option value="11.000001117">Thesis</option>
                        <option value="11.000001118"> Thesis Proposal </option>
                    </FormControl>
                </FormGroup>{' '}
                <Button type="submit">Send </Button>
            </Form>

    );
    }
    }

    export default CallToActionForm