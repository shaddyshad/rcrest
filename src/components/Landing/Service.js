import React from 'react';

import {
    Button
} from 'react-bootstrap';

const Service = ({header, important, text, onHover, button, onLeave}) => {
    return(
        <div onMouseEnter={onHover} onMouseLeave={onLeave}>
            <h4>{header}</h4>
            <p bsstyle="warning">{important}</p>
            <p>{text}</p>
            {button ?
                <Button>Order</Button> : ''
            }
        </div>
    );
}

export default Service;