import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({text, icon}) => {
    return(
        <div>
            <span><FontAwesomeIcon icon={icon}/></span> {text}
        </div>
    );
};

export default Item;