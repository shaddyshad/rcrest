import React from 'react';

//components
import {
    Grid, Row, Col, HelpBlock
} from 'react-bootstrap';

import CTAForm from './CallToActionForm'

const CTA = (props) => {
    return(
        <div style={styles.cta}>
            <Grid>
                <Row className="show-grid">
                    <Col xsHidden md={4} style={styles.b}>
                        <h2>Are you crunched for time?</h2>
                    </Col>
                    <Col xs={12} md={8} >
                        <CTAForm/>
                    </Col>
                    <HelpBlock>We promise to respond soon.</HelpBlock>
                </Row>
            </Grid>
        </div>
    );
};

const styles = {
    cta: {
        border: '1px solid black'
    },
    a: {
        backgroundColor: '#D6EFFF'
    },
    b: {
        backgroundColor: '#FED18C'
    }
}

export default CTA;