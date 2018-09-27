import React, {Component} from 'react';

import {
    Panel,
    ListGroupItem,
    ListGroup,
    HelpBlock
} from 'react-bootstrap';

import Form1 from '../Orders/Forms/Form1';
import Form2 from '../Orders/Forms/Form2';
import Form3 from '../Orders/Forms/Form3';
import Form4 from '../Orders/Forms/Form4';
import Form5 from '../Orders/Forms/Form5';

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            shown: true,
            item: 1
        }
    }

    handleClick = (item) => {
        this.setState({item, show: !this.state.show})
    }

    render(){
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>
                        <Panel onClick={() => this.handleClick(1)}>
                            <Panel.Heading>
                                <HelpBlock>1. PAPER DETAILS</HelpBlock>
                            </Panel.Heading>
                            <Panel.Body style={this.state.item === 1 && this.state.shown ? {display: 'block'} : {display: 'none'}}>
                                <Form1 hideButton/>
                            </Panel.Body>
                        </Panel>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Panel onClick={() => this.handleClick(2)}>
                            <Panel.Heading>
                                <HelpBlock>2. PAPER INSTRUCTIONS</HelpBlock>
                            </Panel.Heading>
                            <Panel.Body style={this.state.item === 2 && this.state.shown ? {display: 'block'} : {display: 'none'}}>
                                <Form2 hideButton/>
                            </Panel.Body>
                        </Panel>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Panel onClick={() => this.handleClick(3)}>
                            <Panel.Heading>
                                <HelpBlock>3. PRICE CALCULATIONS</HelpBlock>
                            </Panel.Heading>
                            <Panel.Body style={this.state.item === 3 && this.state.shown ? {display: 'block'} : {display: 'none'}}>
                                <Form3 hideButton/>
                            </Panel.Body>
                        </Panel>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Panel onClick={() => this.handleClick(4)}>
                            <Panel.Heading>
                                <HelpBlock>4. ADDITIONAL FEATURES</HelpBlock>
                            </Panel.Heading>
                            <Panel.Body style={this.state.item === 4 && this.state.shown ? {display: 'block'} : {display: 'none'}}>
                                <Form4 hideButton/>
                            </Panel.Body>
                        </Panel>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Panel onClick={() => this.handleClick(5)}>
                            <Panel.Heading>
                                {/*<HelpBlock>1. PAYMENT INFO</HelpBlock>*/}
                            </Panel.Heading>
                            <Panel.Body style={this.state.item === 5 && this.state.shown ? {display: 'block'} : {display: 'none'}}>
                                <Form5 hideButton/>
                            </Panel.Body>
                        </Panel>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default Post;