import React, {Component} from 'react';

//components
import {
    Col,
    Row,
    Grid
} from 'react-bootstrap';

//user-defined components
import Service from './Service';

class Services extends Component {

    state = {
        services: [
            {
                show: true,
                header: 'Cheap Research Papers for Sale, Offered by Professionals',
                important: 'Are you operating in a considerably low budget, yet in need of custom research papers?',
                text: ' We mind your pocket and that is why we do not hit you so hard. We have the privilege of dealing with the most professional writers ever. For this reason, we have one big assurance- that you will get professional research papers at cheap prices.',
                alternate: 'A student who is in need of help should get more than just mere help. We are the partners that you need at this time, and we will proudly hold your hand until you hit the top score that you have always wanted. Satisfaction is what we always advocate for. Your low budget will not deny you the satisfaction as long as you deal with Research Paper Crest. '
            },
            {
                show: true,
                header: 'Will You Write My Research Paper the Way I Want?',
                important: 'We are here to boldly confirm that we will indeed work on your paper just the way you want.',
                text: ' That is our promise. Since the inception of our company, it has been an experience of nothing but pure growth. For this very reason, we are able to approach all papers based on the instructions provided. We also give room for revisions.',
                alternate: 'So, what makes us confirm this boldly? First, we enjoy a great privilege of having an able and powerful team of writers. Each and every writer understands the need to abide by the instructions provided. Today, we stand as the most experienced research paper writing team. We hold pride in that. \n'
            },
            {
                show: true,
                header: 'Research Papers for College and Graduate Students',
                important: 'Are you pursing your course at college level?',
                text: 'Are there research papers in that divide that you want handled? Well, Research Paper Crest is right by your side to offer you the college paper help that you badly need.Bring that college research paper today and experience the sweetness of top score.',
                alternate: 'Our team is able to work on projects in different levels, including college. This means that you do not have to worry about complexity of discipline of the research paper that you want done. Let us do the heavy lifting Graduate students are not left behind. They will get equally best research papers. '
            },
            {
                show: true,
                header: 'We Have Discounts for Everyone Who Is Ready to Order Now',
                important: 'We go a step further to offer juicy discounts for all.',
                text: '\'Our sole purpose here is to make sure that you have no reason to complain of expensive research paper writing services. We take pride in being the most lenient and cheap research paper writing service today, without compromising on quality\'',
                alternate: 'First, your first order will be granted a coupon code.You can get upto 30% off .Our company provides several other free perks such as the cover page, list of references and much more. Research Paper Crest just gave you the reason to smile. Kiss bad grades goodbye with the best rates on research papers. '
            }
        ]
    };

    renderServices() {
        const services = [...this.state.services];

        return services.map((service, idx) =>
            <Col xs={12} md={3} key={idx}>
                {service.show ?
                    <Service
                        onHover={() => this.handleHover(idx)}
                        onLeave={() => this.handleLeave(idx)}
                        text={service.text}
                        header={service.header}
                        important={service.important}
                    />

                    :
                    <Service
                        onHover={() => this.handleHover(idx)}
                        onLeave={() => this.handleLeave(idx)}
                        text={service.alternate}
                        header={service.header}
                        important=''
                        button={true}
                    />
                }
            </Col>)
    }

    handleHover = (idx) => {
        const services = [...this.state.services];
        const service = services[idx];
        service.show = false;
        this.setState({services});
    };

    handleLeave = (idx) => {
        const services = [...this.state.services];
        const service = services[idx];
        service.show = true;
        this.setState({services});
    };


    render() {
        return (
            <div style={styles.outline}>
                <h3>We Can Write Research Papers at Affordable Prices!</h3>
                <Grid>
                    <Row>
                        {this.renderServices()}
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

export default Services