import React from 'react';

import {
    Button,
    Panel,
    HelpBlock
} from 'react-bootstrap';

const Orders = ({orders}) => {
    return (
        <div>
            {orders.map(({type, pages, amount, writer_id, status}, idx) => (
                <Panel key={idx}>
                    <Panel.Heading> {type} </Panel.Heading>
                    <Panel.Body>
                        <span>{pages} <HelpBlock>Pages</HelpBlock></span>
                        <span>$ {amount} </span> <br/>
                        <span>Writer's ID: {writer_id}</span>
                    </Panel.Body>
                    <Panel.Footer>
                        {status}

                        <Button>View</Button>
                    </Panel.Footer>
                </Panel>
            ))}

        </div>
    );
};

export default Orders;