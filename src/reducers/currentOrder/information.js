/*
* General information about the order or the request usually set by the program
*
* Included fields like
* class - category the order belongs for classification
* state - the current state of the request
*           - Valid state are ['OPENED', 'POSTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'
* dates - Dates the order with information about the order open time and the time of last edit
*  `created_at`
*  `last_updated`
*
*  Final structure
*  {
*       class: String,
*       state: String,
*       createdAt: DateTime,
*       lastUpdated: DateTime,
*       amount: Float
*  }
*
* */

const infomationReducer = (state={}, action) => {
    return state;
}
