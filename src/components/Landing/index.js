import React, { Component } from 'react';

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

class Landing extends Component {
    render() {
        return (
            <div className="App">
                <NavBar/>
                <Banner/>
                <Values/>
                <ProcessList/>
                <CTA/>
                <Services/>
                <Reviews/>
                <FAQ/>
                <Footer/>
            </div>
        );
    }
}


export default Landing;
