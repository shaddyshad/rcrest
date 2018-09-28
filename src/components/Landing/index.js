import React, {Component} from 'react';

//components
import NavBar from '../Common/NavBar';
import Banner from './Banner';
import Values from './Values';
import ProcessList from './ProcessList';
import CTA from './CallToAction';
import Services from './Services';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Footer from './Footer'
import Book from "../../images/book-closeup-blur.jpg";

import Spinner from './Loader';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';



class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaderShown: false
        }
    }

    handleLoginClick = (event) => {
        const {history} = this.props;
        if (history.location.pathname === '/login')
            return;
        else
            this.setState(
                {loaderShown: true}, () => {
                    setTimeout(() => {
                        const {homepage} = this.props;
                        const path = `${homepage}login`;
                        console.log(path);
                        history.push(path);
                        this.setState({loaderShown: false});
                    }, 1000)
                }
            );

    };

    render() {
        const {loaderShown} = this.state;
        return (
            <div className="App">
                {loaderShown ? <Spinner/> : <div>
                    <div style={styles.banner}>
                        <NavBar onLogin={this.handleLoginClick} showLogin={true}/>
                        <Banner/>
                        <Values/>
                    </div>
                    <ProcessList/>
                    <CTA/>
                    <Services/>
                    <Reviews/>
                    <FAQ/>
                    <Footer/>
                </div>}

            </div>
        );
    }
}

const styles = {
    banner: {
        background: `#222 url(${Book}) no-repeat 50% 0`,
        backgroundSize: 'cover',
        fontFamily: "'Montserrat', sans-serif !important"
    }
};


const mapStateToProps = state => {
    return {
        homepage: state.path
    }
};

export default connect(mapStateToProps)(withRouter(Landing));
