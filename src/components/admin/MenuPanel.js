import React from 'react';

import {
    Panel
} from 'react-bootstrap';

const MenuPanel = ({text, value}) => {
    return(
        <Panel>
            <Panel.Heading>{value}</Panel.Heading>
            <Panel.Body>{text}</Panel.Body>
            <Panel.Footer>View More</Panel.Footer>
        </Panel>
    );
};

export default MenuPanel;