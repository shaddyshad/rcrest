import React from 'react';
import Typist from 'react-typist';

const BannerText = ({text, onTyping}) => {
    return(
        <Typist
            className="TypistExample-header"
            avgTypingSpeed={40}
            startDelay={2000}
            onLineTyped={onTyping}
            cursor={{show: true}}
        >
            <span>{text}</span>
        </Typist>
    );
};

export default BannerText