/*
* Managing chats related with an order.
*
* Chats between a writer and a student will happen here. A single order should have at most that pair in their users fields.
* If the admin want's to contact either the client or the writer, they can send them notification messages.
*
* Structure
* = [
*     {
*       messageId: ID,
*       subject: String,
*       text: String,
*       uploads: [File],
*       creationTime: DateTime,
*       receptionTime: DateTime
*     }
*   ]
*
* */

import {combineReducers} from 'redux';

const chatsReducer = (state={}, action) => {
    return state;
};

const systemMessagesReducer = (state={}, action) => {
    return state;
};

export default combineReducers({chats: chatsReducer, systemMessages: systemMessagesReducer})