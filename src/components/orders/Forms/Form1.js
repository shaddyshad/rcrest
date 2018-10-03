import React, {Component} from 'react';
import {
    FormGroup,
    Form,
    FormControl,
    ControlLabel,
    Button,
    Radio
} from 'react-bootstrap';
import {connect} from 'react-redux';
import {
    DISCIPLINE,
    TOPIC,
    FORMAT,
    SOURCES
} from '../../../constants/fieldNames';
import {
    changeActiveForm
} from '../../../actions/index';
import {editAndSave} from "../../../actions/currentOrder/request";
import {postOrder} from "../../../actions/currentOrder/information";

const mapStateToProps = (state) => {
    return{
        order: state.currentOrder.request
    }
};


const mapDispatchToProps = dispatch => {
    return {
        changeProp: (key, value) => dispatch(editAndSave(key, value)),
        changePage: idx => dispatch(changeActiveForm(idx)),
        postOrder: () => dispatch(postOrder())
    }
};



class Form1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            defaultValue: "Visual Arts and Film Studies",
            paperOptions: [
                {category: 'Arts &amp; Human Studies', items: [
                    "Visual Arts and Film Studies",
                        "Religion and Theology",
                        "Philosophy",
                        "History",
                        "English",
                        "Music",
                        "Literature",
                        "Linguistics",
                        "Ethics",
                        "Archaeology",
                        "Anthropology"
                    ]},
                {category: 'Social Sciences', items: [
                    "Geography",
                        "Psychology",
                        "Sociology",
                        "Gender &amp; Sexual Studies",
                        "Human Resources (HR)",
                        "Journalism, mass media and communication",
                        "Political Science"
                    ]},
                {category: 'Sciences', items: [
                    "Biology",
                        "Chemistry",
                        "Physics (including Earth and space sciences)",
                        "Microbiology",
                        "Astronomy",
                        "Mathematics",
                        "Statistics",
                        "Earth and Space sciences"
                    ]},
                {
                    category: "information Technology", items:
                    [
                        "Computer sciences and Information technology",
                        "Logic and programming",
                        "Systems science",
                    ]

                },
                {
                    category: 'Applied sciences', items: [
                        "Agriculture",
                        "Architecture",
                        "Design and Technology",
                        "Engineering and Construction",
                        "Environmental studies",
                        "Health sciences and medicine",
                        "Education",
                        "Nursing",
                        "Military sciences",
                        "Family and consumer science"
                    ]
                },
                {
                    category: "Economics", items: [
                        "Macro &amp; Micro economics",
                        "Business",
                        "Marketing",
                        "Management",
                        "Finance and Accounting",
                        "E-commerce",
                        "Tourism",
                        "Logistics"
                    ]
                },
                {
                    category: "Law", items: ["Law"]
                },
                {
                    category: "Other", items: ["Creative writting", "Other types"]
                }
            ],
        }
    }

    renderTypes(){
        const categories = [...this.state.paperOptions];
        return categories.map(({category, items}) => (
            <optgroup label={category} key={category}>
                {items.map((item) => (<option value={item} key={item}>{item}</option>))}
            </optgroup>)
        )
    }

    render(){
        const {order, changeProp, changePage} = this.props;
        const {discipline, topic, sources} = order;

        const isInvalid = topic === '' || sources === '';
        return (
            <Form>
                <FormGroup controlId="basic-paper">
                    <ControlLabel>Paper Subject</ControlLabel>
                    <FormControl
                        componentClass="select"
                        defaultValue={discipline}
                        onChange={(event) => changeProp(DISCIPLINE, event.target.value)}
                    >
                        {this.renderTypes()}
                    </FormControl>
                </FormGroup>
                <FormGroup
                    controlId="basic-text"
                >
                    <ControlLabel>Paper Topic</ControlLabel>
                    <FormControl
                        type="text"
                        value={topic}
                        placeholder="Writers Choice"
                        onChange={(event) => changeProp(TOPIC, event.target.value)}
                    />
                </FormGroup>

                <FormGroup
                    controlId="basic-text"
                >
                    <ControlLabel>Number of sources</ControlLabel>
                    <FormControl
                        type="text"
                        value={sources}
                        placeholder="0"
                        onChange={(event) => changeProp(SOURCES, event.target.value)}
                    />
                </FormGroup>
                <FormGroup onChange={(event) => changeProp(FORMAT, event.target.value)}>
                    <Radio name="radioGroup"
                           value="MLA"
                           inline
                            checked
                    >
                        MLA
                    </Radio>{' '}
                    <Radio name="radioGroup"
                           value="APA"
                           inline>
                        APA
                    </Radio>{' '}
                    <Radio name="radioGroup"
                           value="HARVARD"
                           inline>
                        HARVARD
                    </Radio>
                    <Radio name="radioGroup"
                           value="Chicago / Turiban"
                           inline>
                        Chicago / Turabian
                    </Radio>
                    <Radio name="radioGroup"
                           value="Other"
                           inline>
                        Other
                    </Radio>
                </FormGroup>

                {this.props.hideButton ? null :<Button disabled={isInvalid} onClick={() => changePage(1)}>Next</Button>}

            </Form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1);