import React, {Component} from 'react';

//components
import {
    Grid,
    Row,
    Col,
    HelpBlock
} from 'react-bootstrap';
import Review from "./Review";

class Reviews extends Component{

    constructor(props){
        super(props);
        this.state = {
            reviews: [
                {
                    text: 'My worry was getting an agency that would charge less and deliver top-quality papers for me. That sounded rather impossible since most agencies out there were on my neck with their exaggerated charges. Research Paper Crest proved to be a unique agency. They have the best writers yet offering services at lenient charges.',
                    number: 6883,
                    name: 'Emma',
                    stars: 5,
                    time: '4 HOURS AGO'
                },
                {
                    text: 'Just like most students out there, I had a pile of assignments to cover in a short deadline. I guess I got lazy and wasted all the time I had. I definitely needed help. Research Paper Crest offered priceless help. I was impressed with their speed and professionalism. Should I get lazy more?',
                    number: 5991,
                    name: 'Hemmy',
                    stars: 5,
                    time: '5 DAYS AGO'
                },
                {
                    text: 'Assignments! Assignments! Assignments! The last thing I wanted to hear. But I am still thankful to my right-hand agency. Research Paper Crest has been helping me for the last 4 semesters. I still want to continue with their services. They never let me down. Any day any time, the agency is ready to handle my assignment. I have full trust in them.',
                    name: 'Vannesa',
                    number: 9686,
                    stars: 4.5,
                    time: '1 WEEK AGO'
                },
                {
                    text: 'What was I supposed to do with my research paper yet I missed almost all classes in my last semester? Well, the last thing I could think of was failing. I went around and found myself at Research Paper Crest. They handled my paper like a piece of cake and Voila! I had everything done. Thanks a lot.',
                    name: 'Jessica',
                    number: 8945,
                    stars: 4.5,
                    time: '1 WEEK AGO'
                }
            ]
        }
    }

    renderReviews(){
        const reviews = [...this.state.reviews];
        return reviews.map((item, idx) => (
            <Row key={idx}>
                <Col xs={12} md={12}>
                    <Review name={item.name} stars={item.stars} text={item.text} number={item.number} time={item.time}/>
                </Col>
            </Row>
        ))
    }

    render(){
        return (
            <div>
                <h2>Customer Reviews</h2>
                <HelpBlock>See why students have chosen us as their sole writing assistance provider.</HelpBlock>
                <Grid>
                    {this.renderReviews()}
                </Grid>
            </div>
        );
    }
}

export default Reviews