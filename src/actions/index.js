//actions

import {CHANGE_ACTIVE_FORM} from "../constants/index";


//Orders form management
export const changeActiveForm = (formNumber) => ({type: CHANGE_ACTIVE_FORM, payload: formNumber});
