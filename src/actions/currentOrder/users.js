/*
* Users action creators
* */

import {INIT_USERS_STUDENT, INIT_USERS_WRITER} from "../../constants/currentOrder/users";

//Initialization of users in the order
/*
*       Since the default order request comes from the client
*       we are going to initialize the client with the currently
*       authenticated user and initialize the writter with null.
*       The writer should be initialized by the admin i.e (authUser) => authUser.role = 'admin';
* */
export const init_users = () => (dispatch, getState) => {
    const {authUser} = getState();
    const uid = authUser ? authUser.uid : null;
    dispatch(init_student(uid));
    dispatch(init_writer(null));
};


//Student management signals
export const init_student = (uid) => ({type: INIT_USERS_STUDENT, payload: {uid}});

//Writer management signals
export const init_writer_auth = user => ({type: INIT_USERS_WRITER, payload: user});     //exclusively for admins or null

export const init_writer = (user) => (dispatch, getState) => {
    dispatch(init_writer_auth(null));        //first, clear the field incase of anything
    const {authUser} = getState();
    if(!authUser || authUser.role !== 'admin')
        return;
    dispatch(init_writer_auth((user)));
};
