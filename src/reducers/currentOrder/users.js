/*
* Manages the users section of the state tree
*
* It has 3 reducers each for the three parts of the users - the writer, student and the 'me' object
*
* Both the writer and the reducer are two different users, i.e they can't have the same userID
* The third object 'me' or the authUser is a pointer to any of the two.
*
* `users_fields = {
*               userID: ID,
*               username: String,
*               email: Email,
*               userType: String,
*               accountVerified: Boolean,
*               lastLogin: DateTime,
* }
*
* student = {//user fields || null };
* writer = {//user fields || null }
* me = student || writer
*
* */
import {combineReducers} from 'redux';
import {INIT_USERS_STUDENT, INIT_USERS_WRITER} from "../../constants/currentOrder/users";

const writer = (state = {}, action) => {
    switch (action.type) {
        case INIT_USERS_WRITER:
            //Initialize the writer,
            return {...action.payload};

        default:
            return state;
    }
};

const student = (state = {}, action) => {
    switch (action.type) {
        case INIT_USERS_STUDENT:
            //Initialize the student, whether authenticated or not
            return {...action.payload};
        default:
            return state;
    }
};


export default combineReducers({writer, student});