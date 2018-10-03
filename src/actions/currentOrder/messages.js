//Messages action creators

//INIT
import {INIT_MESSAGES} from "../../constants/currentOrder/messages";

export const init_messages = () => ({type: INIT_MESSAGES});
// export const add_message = message => (dispatch, getState) => {
//     // dispatch(loadingData());
//     //Save the message to the current logged in user
//     const {authUser: {uid}} = getState();
//
// }