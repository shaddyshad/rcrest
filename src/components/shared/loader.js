import React from 'react';

import Loader from 'react-loader-spinner';

const Spinner = (props) => {
    return(
        <Loader
            type="TailSpin"
            color="#FFBA00"
            height={80}
            width={80}
            />
    );
}

export default Spinner;