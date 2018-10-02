import React from 'react';
import Typist from 'react-typist';

const BannerText = ({text, onTyping}) => {
    return(
        <Typist
            avgTypingSpeed={40}
            startDelay={2000}
            onLineTyped={onTyping}
            cursor={{show: false}}
        >
            <h1 style={styles.k}>{text}</h1>
        </Typist>
    );
};

const styles = {
    k: {
        color: '#FED18C'
    }
}

export default BannerText