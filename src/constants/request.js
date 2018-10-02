//Request action creators - To create, add and save order
export const INIT_REQUEST = "INIT_REQUEST";
export const SET_DEADLINE = "SET_DEADLINE";                          //to transform user input into date format
export const VALIDATE_WRITER_ID = "VALIDATE_WRITER_ID";             //To validate a writer ID
export const PRODUCE_DIGITAL_COPY = "PRODUCE_DIGITAL_COPIES";       //produce digital copies for the writer and save them
export const SAVE_REQUEST = "SAVE_ORDER";                             //Saves order to the database, and associates
export const DELETE_REQUEST = "DELETE_REQUEST";                         //Delete requests
//End action creators