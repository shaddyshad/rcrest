import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Value = ({icon, header, text}) => {
    return(
        <div>
            <FontAwesomeIcon icon={icon} style={styles.icon}/>
            <h4 style={styles.header}>{header}</h4><br/>
            <p style={styles.text}>{text}</p>
        </div>
    );
};

const styles = {
    icon: {
        color: '#FED18C',
        fontSize: 33,
        marginBottom: '1rem',

    },
    header: {
        color: '#FED18C',
        fontSize: 22,
        fontWeight: 700,
        marginBottom: 3
    },
    text: {
        color: '#D6EFFF',
        fontSize: 19,
        marginTop: 0,
        marginBottom: '1rem'
    }
}

export default Value;