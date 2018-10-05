import {database} from './firebase';
import {updateOrderList} from "../actions/orders";

const orders = database.ref('/orders');
orders.on('value', snapshot => {
    updateOrderList(snapshot.val())
});

export default database;