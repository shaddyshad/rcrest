import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
//components
import BannerText from './BannerText';
import PriceCalculator from '../../../shared/priceCalculator';
import LoginForm from '../../../shared/signIn';
import Loader from '../../../shared/loader';
import {connect} from "react-redux";


class Banner extends Component {

    constructor(props) {
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
            typing: true,
            loaderShown: false
        };
    }


    done = () => {
        let {index, lines} = this.state;
        index += 1;
        if (index >= lines.length)
            index = 0;
        this.setState({typing: false, index}, () => {
            this.setState({typing: true})
        });
    };

    getLine() {
        const lines = [...this.state.lines];
        const {index} = this.state;
        return lines[index];
    }

    // handleContinue = (event) => {
    //     //simulate a wait event
    //     this.setState(
    //         {loaderShown: true}, () => {
    //             setTimeout(() => {
    //                 history.push('/orders');
    //                 this.setState({loaderShown: false})
    //             }, 1000);
    //         }
    //     );
    //     event.preventDefault();
    // };

    getScreen(){
        const {form} = this.props;
        switch (form) {
            case "signin":
                return <LoginForm/>;
            default:
                return <PriceCalculator/>;
        }
    }


    render(){
        const {isLoading} = this.props;
        return (
            <div style={styles.banner}>
                {isLoading ?
                    <Loader
                        type="TailSpin"
                        color='#FFBA00'
                        height={80}
                        width={80}
                    /> :
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={8}>
                                <h4 style={styles.head}>Relax We Write Your Research Papers and Essays!</h4>
                                {this.state.typing ?
                                    <BannerText text={this.getLine()} onTyping={this.done}/> : ''}
                            </Col>
                            <Col xs={12} md={4}>
                                {this.getScreen()}
                            </Col>
                        </Row>
                    </Grid>
                }

            </div>
        );
    }
}


const styles = {
    head: {
        fontSize: 43,
        font: '600 30px/1.25 Roboto Mono, monospace'
    },
    moving: {
        color: '#FED18C'
    },
    banner: {
        height: 400
    }
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
};

export default connect(mapStateToProps)(Banner);