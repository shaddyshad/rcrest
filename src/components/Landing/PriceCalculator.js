import React, {Component} from 'react';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    HelpBlock,
    Panel
} from "react-bootstrap";

import {connect} from 'react-redux';

import {setOrdersPath} from '../../Actions';

class PriceCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 1.8,
            pages: 1,
            period: 1,
        }
    }

    handleLevelChange = (e) => {
        this.setState({level: parseFloat(e.target.value, 10)});
    };

    handlePeriodChange = (e) => {
        this.setState({period: parseFloat(e.target.value, 10)})
    };

    handlePageChange = (e) => {
        this.setState({pages: parseFloat(e.target.value, 10)})
    };

    calculate() {
        const {level, pages, period} = this.state;
        return Math.round(level * pages * period * 10.5 * 2.0);
    }



    render() {
        const {setOrders} = this.props;

        return (
            <div style={styles.form}>
                <Panel style={styles.form}>
                    <Panel.Body>
                        <Form>
                            <HelpBlock><h3 style={styles.c}>Calculate your price here.</h3></HelpBlock>
                            <FormGroup controlId="formControlsSelect">
                                <FormControl
                                    componentClass="select"
                                    placeholder="select"
                                    onChange={this.handleLevelChange}
                                    defaultValue="1.8"
                                >
                                    <option value="1.6">High School</option>
                                    <option value="1.8">Undegraduate</option>
                                    <option value="1.85">Masters</option>
                                    <option value="1.9">Doctorate</option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <FormControl
                                    componentClass="select"
                                    placeholder="Pages"
                                    defaultValue="1"
                                    onChange={this.handlePageChange}
                                >
                                    <option value="1">275 Words / 1 Page</option>
                                    <option value="2">550 Words / 2 Pages</option>
                                    <option value="3">825 Words / 3 Pages</option>
                                    <option value="4">1100 Words / 4 Pages</option>
                                    <option value="5">1375 Words / 5 Pages</option>
                                    <option value="6">1650 Words / 6 Pages</option>
                                    <option value="7">1925 Words / 7 Pages</option>
                                    <option value="8">2200 Words / 8 Pages</option>
                                    <option value="9">2475 Words / 9 Pages</option>
                                    <option value="10">2750 Words / 10 Pages</option>
                                    <option value="11">3025 Words / 11 Pages</option>
                                    <option value="12">3300 Words / 12 Pages</option>
                                    <option value="13">3575 Words / 13 Pages</option>
                                    <option value="14">3850 Words / 14 Pages</option>
                                    <option value="15">4125 Words / 15 Pages</option>
                                    <option value="16">4400 Words / 16 Pages</option>
                                    <option value="20">5500 Words / 20 Pages</option>
                                    <option value="17">4675 Words / 17 Pages</option>
                                    <option value="18">4950 Words / 18 Pages</option>
                                    <option value="19">5225 Words / 19 Pages</option>

                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="formControlsSelect">
                                <FormControl
                                    componentClass="select"
                                    placeholder="Deadline"
                                    defaultValue="0.7"
                                    onChange={this.handlePeriodChange}
                                >
                                    <option value="1.2">6 Hours</option>
                                    <option value="1.1">12 Hours</option>
                                    <option value="1.0">1 Day</option>
                                    <option value="0.95">2 Days</option>
                                    <option value="0.9">3 Days</option>
                                    <option value="0.85">4 Days</option>
                                    <option value="0.8">5 Days</option>
                                    <option value="0.75">7 Days</option>
                                    <option value="0.7">14 Days</option>
                                    <option value="0.65">30 Days</option>
                                </FormControl>
                            </FormGroup>

                            <HelpBlock><h3>Standard Cost: ${this.calculate()}</h3></HelpBlock>

                            <Button type="submit" onClick={() => setOrders('/orders')}>Continue</Button>

                        </Form>
                    </Panel.Body>
                </Panel>

            </div>
        );
    }
}

const styles = {
    form: {
        backgroundColor: '#FFBA00',
        borderRadius: 20
    },
    c: {
        fontSize: 21
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        setOrders: path => dispatch(setOrdersPath(path))
    }
};

export default connect(null, mapDispatchToProps)(PriceCalculator);