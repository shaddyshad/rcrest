import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
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
    faBullhorn,
    faQuestionCircle,
    faCheckCircle,
    faMapMarkerAlt,
    faHistory,
    faClock
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faShieldAlt, faGem, faBriefcase, faUser, faEnvelopeOpenText, faDollarSign, faFile, fab,
    faGraduationCap, faEdit, faCertificate, faComment, faFutbol, faBullhorn, faQuestionCircle,
    faCheckCircle, faMapMarkerAlt, faHistory, faClock
);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
