//order.js
import {combineReducers} from 'redux';

import {
    CHANGE_PAPER_DETAILS_PROPERTY,
    CHANGE_ADDITIONAL_PROPERTY,
    CHANGE_PAPER_INSTRUCTIONS_PROPERTY,
    CHANGE_PAPER_CALCULATIONS_PROPERTY,
    CHANGE_ORDER_PROPERTY,
    SAVE_ORDER_ANON
} from "../Constants";

let INITIAL_STATE = {
    //Order attributes
    paperDetails: {
        discipline: 'Visual Arts & studies',
        topic: '',
        sources: 0,
        format: 'MLA',
    },
    paperInstructions: {
        uploads: [],
        instructions: ''
    },
    paperCalculations: {
        academicLevel: 'UNDERGRADUATE',
        pages: '1',
        spacing: '',
        deadline: '14_DAYS',
        type: 'ARTICLE',
    },
    additionalFeatures: {
        discountCode: '',
        isDigitalCopies: false,
        writerId: '',
    },
    general: {
        authUser: null,
        amount: '3',
        status: ''
    }
};

const orderPropertyReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_ORDER_ANON:
            //save the order
        default:
            return state;
    }
};

const generalPropertyReducer = (state=INITIAL_STATE.general, action) => {
    switch (action.type) {
        default:
            return state;
            //cases
        case CHANGE_ORDER_PROPERTY:{
            const {key, value} = action.payload;
            if(hasKey(state, key)){
                return {...state, [key]: value};
            }else{
                return state;
            }
        }

    }
};

const hasKey = (obj, key) => {
    return Object.keys(obj).find(k => k === key);
};

const paperDetailsReducer = (state=INITIAL_STATE.paperDetails, action) => {
    switch (action.type) {
        case CHANGE_PAPER_DETAILS_PROPERTY:{
            const {key, value} = action.payload;
            if(hasKey(state, key)){
                //mutate the initial state
                return{...state, [key]: value};
            }else{
                return state;
            }
        }
        default:
            return state;
    }
};

const paperInstructionsReducer = (state=INITIAL_STATE.paperInstructions, action) => {
    switch (action.type) {
        case CHANGE_PAPER_INSTRUCTIONS_PROPERTY:{
            const {key, value} = action.payload;
            if(hasKey(state, key)){
                return {...state, [key]: value};
            }else{
                return state;
            }
        }
        default:
            return state;
    }
};

const paperCalculationsReducer = (state=INITIAL_STATE.paperCalculations, action) => {
    switch (action.type) {
        case CHANGE_PAPER_CALCULATIONS_PROPERTY:{
            const {key, value} = action.payload;
            if(hasKey(state, key)){
                return {...state, [key]: value};
            }else{
                return state;
            }
        }
        default:
            return state;
    }
};

const additionalFeaturesReducer = (state=INITIAL_STATE.additionalFeatures, action) => {
    switch (action.type) {
        case CHANGE_ADDITIONAL_PROPERTY:{
            const {key, value} = action.payload;
            if(hasKey(state, key)){
                return {...state, [key]: value};
            }else{
                return state;
            }
        }
        default:
            return state;
    }
};


export default combineReducers({
    general: orderPropertyReducer,
    paperDetails: paperDetailsReducer,
    paperInstructions: paperInstructionsReducer,
    paperCalculations: paperCalculationsReducer,
    additionalFeatures: additionalFeaturesReducer,
    order: orderPropertyReducer
});