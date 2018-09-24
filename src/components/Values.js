import React, {Component} from 'react';
//components
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap';
//user defined components
import Value from './Value';

class Values extends Component{

    state = {
        values: [
            {header: "Professional Writers", text: "With the minimum qualification being a Bachelor's, we got the best writers", icon: 'briefcase'},
            {header: "Quality work", text: "With close adherence to quality, we ensure that we submit only perfect papers.", icon: 'gem'},
            {header: "Non-plagiarized papers", text: "Only original research papers that meet world standards are our cup of tea.", icon: 'shield-alt'}
        ]
    };

    renderValues(){
        const values = [...this.state.values];
        return(
            values.map(value =>
                <Col xs={12} md={4}>
                <Value text={value.text} icon={value.icon} header={value.header}/>
                </Col>
            )
        )
    }

    render(){
        return (
            <div style={styles.outline}>
                <h3>Why choose us</h3>
                <Grid>
                    <Row className="show-grid">
                        {this.renderValues()}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const styles = {
    outline: {
        border: '1px solid black'
    }
}

export default Values