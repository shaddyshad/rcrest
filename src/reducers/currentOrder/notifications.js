/*
* Notifications related to orders, to bee seen by both writters, users and the admin
*
* Notification are mostly triggered by state transition in the order.
* They will carry more information regarding the state of the order including the message, the transition, information about
* the sender and the recipient
*
* Final Structure
* =[
*   {
*       notificationId: ID,
*       message: <Message>
*       from: {
*           userId: ID,
*           userName: Name
*       }
*       to: {
*           userId: ID,
*           userName: Name
*       }
*   }
*  ]
* */

import {INIT_NOTIFICATIONS} from "../../constants/currentOrder/notifications";

const notificationsReducer = (state=[], action) => {
    switch (action.type) {
        case INIT_NOTIFICATIONS:
            return state;
        default:
            return state;
    }
};

export default notificationsReducer;