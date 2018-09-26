import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
//components
import BannerText from './BannerText';
import PriceCalculator from './PriceCalculator'


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
                        <PriceCalculator/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Banner