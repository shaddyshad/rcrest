import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import {
    Route,
    Switch
} from 'react-router-dom';

//components
import BannerText from './BannerText';
import PriceCalculator from './PriceCalculator';
import LoginForm from '../Common/LoginForm';
import RegisterForm from '../Common/RegisterForm';

/*
* routes
* / - pricecalculator
* /loging - Login Form
* /register - Register form
* */



class Banner extends Component{

    constructor(props){
        super(props);
        this.state = {
            lines: [
                "Research papers for sale.",
                "Quality research papers.",
                "Cheap research papers.",
                "Plagiarism free essays.",
            ],
            index: 0,
            current: '',
            typing: true
        };
    }


    done = () => {
        let {index, lines} = this.state;
        index += 1;
        if(index >= lines.length)
            index = 0;
        this.setState({ typing: false, index }, () => {
            this.setState({ typing: true})
        });
    };

    getLine(){
        const lines = [...this.state.lines];
        const {index} = this.state;
        return lines[index];
    }

    
    render(){
        const Register = <RegisterForm control={true}/>
        return (
            <Grid>
                <Row className="show-grid">
                    {/*Banner content*/}
                    <Col xs={12} md={8}>
                        <h4>Relax We Write Your Research Papers and Essays!</h4>
                        {this.state.typing ?
                        <BannerText text={this.getLine()} onTyping={this.done}/> : '' }
                    </Col>
                    {/*Login/ register form*/}
                    <Col xsHidden md={4}>
                        <Switch>
                            <Route exact path='/' component={PriceCalculator}/>
                            <Route path='/login' component={LoginForm} />
                            <Route path='/register' children={Register}/>
                        </Switch>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Banner