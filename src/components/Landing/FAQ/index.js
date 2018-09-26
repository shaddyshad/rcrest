import React, {Component} from 'react';

import {
    HelpBlock,
    Row,
    Grid,
    Col
} from 'react-bootstrap';
import Question from "./Question";

class FAQs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            faqs: [
                {
                    title: 'Who Are We and What Services Do We Offer?',
                    text: 'Research paper Crest is a US-based agency that offers all kinds of academic writing services. We have been in this business for close to ten years now and our experience has only gotten better with time. We believe in enabling students all over the world achieve the best they can by offering assistance and providing them with sample papers that will enable them learn the new research and writing techniques. Among the services that we offer are essays in various fields, dissertation and thesis writing, capstone projects, general class assignments and online classes. We still offer many other academic writing services that we cannot list here. Our only limitation is the client\'s instructions.'
                },
                {
                    title: 'How Do I Register?',
                    text: 'The registration process is encompassed with the ordering process. To have an account with us, you have to place an order. We do this to protect our clients from spammers who just create inactive accounts without the intention of getting assistance. When you place an order, you will find the registration form at the very last step just before submitting your order. Here, you will be required to fill in your email address and set a password of your choice.'
                },
                {
                    title: 'How Long Before My Order is Assigned to a Writer?',
                    text: 'We do our best to review each order and have it assigned to the most qualified writer within the shortest time possible. This will enable you to monitor the progress of your order by getting in touch with the writer via messages. In most cases, your order will be assigned to the best writer within the first 15 minutes. In some circumstances however, we may find it not so easy to match an order with the most appropriate writer. Such circumstances may arise when your order is somehow complex and needs extra caution in assigning a writer or when your order is massive such that it will need an ardent writer. Even then, we make sure that the assigning process does not eat too much of the time that should be used in the execution of the order. We make sure that all the orders are delivered within stipulated time.'
                },
                {
                    title: 'What are the Referencing Styles for the Papers?',
                    text: 'This will depend on the referencing style that you choose while placing your order. Our writers are well conversant with the different formatting styles for academic papers. Styles such as APA, MLA, Turabian, Vancouver, and Harvard are well known by our writers. Basically, no referencing style is unknown of at Research Paper Crest. If you want a different style to be used for your paper, just select "Other" under Formatting style and state the one you want in the instructions section.'
                },
                {
                    title: 'What If I Am Not Satisfied With the Work That I Get?',
                    text: 'We have a thoroughly comprehensive revision policy that should make you worry-free. Our writers are expected to give papers of highest quality failure to which they should be ready to make the necessary revisions until the client is fully satisfied. To understand how we handle revisions, please read our revision policy.'
                },
                {
                    title: 'Can I Request for Revision of My Paper?',
                    text: 'A client has an option of selecting a new deadline for a paper they request a revision on. Please select an appropriate deadline that is enough for the changes that you request. Even then, we highly encourage flawless communication between the client and the writer so that everything can flow smoothly and each party go home with a satisfied heart.'
                },
                {
                    title: 'What About Discounts?',
                    text: 'f you are making your first order with us, you can request for your 10% discount from our support team via the live chat. A discount code will be given which will see you pay 10% less. From time to time and during special occasions (think of Christmas, Father\'s Day, Mother\'s Day, Valentine\'s Day), we give up crazy discounts! Look out for our promotional emails during such times to save big while placing your order with us.'
                },
                {
                    title: 'Can I Have a Specific Writer Work for Me?',
                    text: 'If a writer has worked for you before and you liked their work such that you would like them to work on your current order, just input their writer ID under the "Want a specific writer?" section on the order form. Another situation that may necessitate this is if your friend refers you to a specific writer. Just ask that friend about that writer\'s ID and input it in the same way on the order form. If you know only the name of the writer and not the ID, contact our support team so that they can give you the writer ID to use.'
                },
                {
                    title: 'Where Do I Get the Writer ID?',
                    text: 'Check your previous orders done by the same writer and you will find the writer ID there. If you are not able to locate any order done by the same writer, just contact our support team and give them the name of the writer so they can give you the ID. If you are a new client and the writer has been suggested to you by a friend, ask that friend to give you the writer ID. If you have been referred by only the name, contact our support and give them the name so they can retrieve the writer ID for you.'
                },
                {
                    title: 'What Are the Digital Copies of Sources Used?',
                    text: 'These are the Crest pages, PDF documents, photos and/or URLs of the sources/references that a writer uses as reference while working on your order. In rare cases, professors ask that you submit the work plus the sources where you obtained your information from. In other cases, you may just want proof of the sources that the writer used for your paper. At a small fee on top, you can get these sources prepared and delivered to you together with your order. Just indicate while placing your order that you would also need the digital copies of sources used as reference for your paper.'
                }
            ]
        }
    }

    rednerQuestion() {
        const questions = [...this.state.faqs];
        return questions.map((question, idx) => (
            <Col key={idx} xs={12} md={6}>
                <Question text={question.text} title={question.title}/>
            </Col>
        )
        )
}

render()
{
    return (
        <div>
            <h2>Frequently asked questions</h2>
            <HelpBlock>Whether you struggle to write an essay, coursework, research paper, annotated bibliography or
                dissertation, we’ll connect you with a screened academic writer for effective writing assistance .
                Research Paper Crest is where all writers are tried and true, so you’ll work with an expert
                knowledgeable in your subject.</HelpBlock>
            <Grid>
                <Row>
                    {this.rednerQuestion()}
                </Row>
                <h3>Get your papers created by real professionals!</h3>
            </Grid>
        </div>
    );
}
}

export default FAQs