import React, {Component} from 'react';

//components
import NavBar from '../../shared/NavBar';
import Banner from './banner/Banner';
import Values from './values/Values';
import ProcessList from './ProcessList';
import CTA from './cta/CallToAction';
import Services from './services/Services';
import Reviews from './reviews/index';
import FAQ from './faqs/index';
import Footer from './Footer';

//Backgroung image
import Book from "../../../images/book-closeup-blur.jpg";



class Landing extends Component {
    render() {
        return (
            <div className="App">
                <div>
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
                </div>

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

export default Landing;
