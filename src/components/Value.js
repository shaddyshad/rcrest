import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Value = ({icon, header, text}) => {
    return(
        <div>
            <FontAwesomeIcon icon={icon}/>
            <h4>{header}</h4><br/>
            <p>{text}</p>
        </div>
    );
};

export default Value;