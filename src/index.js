import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faShieldAlt,
    faGem,
    faBriefcase,
    faUser,
    faEnvelopeOpenText,
    faDollarSign,
    faFile,
    faGraduationCap,
    faEdit,
    faCertificate,
    faComment,
    faFutbol,

} from '@fortawesome/free-solid-svg-icons'

library.add(
    faShieldAlt, faGem, faBriefcase,faUser, faEnvelopeOpenText, faDollarSign, faFile, fab,
    faGraduationCap, faEdit, faCertificate, faComment, faFutbol
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
