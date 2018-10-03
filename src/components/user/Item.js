import React from 'react';

import {
    Panel,
    HelpBlock,
    Button
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from "react-redux";

const Item = ({text, icon, onClick, count}) => {
    return(
        <Panel>
            <Panel.Body>
                <FontAwesomeIcon icon={icon}/>
                <h2>{count ? count : 0}</h2>
                <HelpBlock>{text}</HelpBlock>
            </Panel.Body>
            <Panel.Footer>
                <Button onClick={onClick}><HelpBlock>View Details <FontAwesomeIcon icon='arrow-circle-right'/></HelpBlock></Button>
            </Panel.Footer>
        </Panel>
    );
};

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
};

export default connect(mapStateToProps)(Item);

export {
    Item
}