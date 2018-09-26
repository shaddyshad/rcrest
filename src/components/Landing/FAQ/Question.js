import React from 'react';

const Question = ({title, text}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    );
};

export default Question;