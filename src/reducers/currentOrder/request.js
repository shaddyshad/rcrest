/*
* Manage the request part of an order - The part that's controlled by user input
*
* It should allow for users to set it's fields, it should sanitize and protect the fields access and writes
*
* STRUCTURES
*
* `request = {
*               discipline: String,
*               topic: String,
*               sources: Number,
*               format: String,
*               instructions: String,
*               academicLevel: String,
*               pages: Number,
*               spacing: String,
*               deadline: DateTime,
*               type: String,
*               digitalCopies: false,
*               discountCode: String,
*               writerId: ID,
*         }
* `
*
* */

import {
    EDIT_PROPERTY,
    INIT_REQUEST,
    REQUEST_INIT_ACADEMIC_LEVEL,
    REQUEST_INIT_DEADLINE, REQUEST_INIT_DIGITAL_COPIES,
    REQUEST_INIT_DISCIPLINE,
    REQUEST_INIT_DISCOUNT_CODE,
    REQUEST_INIT_FORMAT,
    REQUEST_INIT_INSTRUCTIONS,
    REQUEST_INIT_PAGES,
    REQUEST_INIT_SOURCES,
    REQUEST_INIT_SPACING,
    REQUEST_INIT_TOPIC,
    REQUEST_INIT_TYPE, REQUEST_INIT_WRITER_ID
} from "../../constants/currentOrder/request";
import {SET_ORDER_ID} from "../../constants/currentOrder/information";

const INITIAL_REQUEST_STATE = {
    discipline: REQUEST_INIT_DISCIPLINE,
    topic: REQUEST_INIT_TOPIC,
    sources: REQUEST_INIT_SOURCES,
    format: REQUEST_INIT_FORMAT,
    instructions: REQUEST_INIT_INSTRUCTIONS,
    academicLevel: REQUEST_INIT_ACADEMIC_LEVEL,
    pages: REQUEST_INIT_PAGES,
    spacing: REQUEST_INIT_SPACING,
    deadline: REQUEST_INIT_DEADLINE,
    type: REQUEST_INIT_TYPE,
    digitalCopies: REQUEST_INIT_DIGITAL_COPIES,
    discountCode: REQUEST_INIT_DISCOUNT_CODE,
    writerId: REQUEST_INIT_WRITER_ID,
    orderID: null
};

const requestReducer = (state={}, action) => {
    switch (action.type) {
        case INIT_REQUEST:
            return {...INITIAL_REQUEST_STATE};

        case EDIT_PROPERTY:
            const {key, value} = action.payload;
            return {...state, [key]: value};

        case SET_ORDER_ID:
            return {...state, orderID: action.payload};

        default:
            return state;
    }
};

export default requestReducer;