import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faShieldAlt,
    faGem,
    faBriefcase,
    faUser,
    faEnvelopeOpenText,
    faDollarSign,
    faFile
} from '@fortawesome/free-solid-svg-icons'

library.add(faShieldAlt, faGem, faBriefcase,faUser, faEnvelopeOpenText, faDollarSign, faFile);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
