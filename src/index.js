import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ConnectedRouter} from 'connected-react-router';
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
    faClock,
    faCartPlus,
    faCheckSquare,
    faListUl,
    faServer,
    faBell,
    faMoneyBill,
    faArrowCircleRight,
    faTachometerAlt,
    faPlusCircle,
    faStopwatch,
    faSpinner,
    faRandom
} from '@fortawesome/free-solid-svg-icons';

import {Provider} from 'react-redux';

import store, {history} from './store';

library.add(
    faShieldAlt, faGem, faBriefcase, faUser, faEnvelopeOpenText, faDollarSign, faFile, fab,
    faGraduationCap, faEdit, faCertificate, faComment, faFutbol, faBullhorn, faQuestionCircle,
    faCheckCircle, faMapMarkerAlt, faHistory, faClock, faServer, faCartPlus, faCheckSquare, faListUl, faBell,
    faMoneyBill, faArrowCircleRight, faTachometerAlt, faPlusCircle, faStopwatch, faSpinner, faRandom
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
