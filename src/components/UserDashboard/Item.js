import React from 'react';

import {
    Panel,
    HelpBlock,
    Button
} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({text, icon, path, onClick}) => {
    return(
        <Panel>
            <Panel.Body>
                <FontAwesomeIcon icon={icon}/>
                <h2>0</h2>
                <HelpBlock>{text}</HelpBlock>
            </Panel.Body>
            <Panel.Footer>
                <Button onClick={onClick}><HelpBlock>View Details <FontAwesomeIcon icon='arrow-circle-right'/></HelpBlock></Button>
            </Panel.Footer>
        </Panel>
    );
};

const Item2 = ({text}) => {
    return (
        <Panel>
            <Panel.Body> <h2>0</h2></Panel.Body>
            <Panel.Footer>
                <HelpBlock>View Details <FontAwesomeIcon icon='arrow-circle-right'/></HelpBlock>
            </Panel.Footer>
        </Panel>
    )
};

export default Item;

export {Item, Item2}