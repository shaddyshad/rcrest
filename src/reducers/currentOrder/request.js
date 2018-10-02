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
const requestReducer = (state={}, action) => {
    return state;
};

export default requestReducer;