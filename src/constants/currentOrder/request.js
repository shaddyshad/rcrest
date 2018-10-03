//Request action creators - To create, add and save order
export const INIT_REQUEST = "INIT_REQUEST";
export const SET_DEADLINE = "SET_DEADLINE";                          //to transform user input into date format
export const VALIDATE_WRITER_ID = "VALIDATE_WRITER_ID";             //To validate a writer ID
export const PRODUCE_DIGITAL_COPY = "PRODUCE_DIGITAL_COPIES";       //produce digital copies for the writer and save them
export const SAVE_REQUEST = "SAVE_ORDER";                             //Saves order to the database, and associates
export const DELETE_REQUEST = "DELETE_REQUEST";                         //Delete requests
export const EDIT_PROPERTY = "EDIT_PROPERTY";
export const CLEAR_ORDER_REQUEST = "CLEAR_ORDER_REQUEST";
//End action creators

//BEGIN state
export const REQUEST_INIT_DISCIPLINE = "Visual Arts and Film Studies";
export const REQUEST_INIT_TOPIC = "";
export const REQUEST_INIT_SOURCES = 0;
export const REQUEST_INIT_FORMAT = "MLA";
export const REQUEST_INIT_INSTRUCTIONS = "";
export const REQUEST_INIT_ACADEMIC_LEVEL = "UNDERGRADUATE";
export const REQUEST_INIT_DEADLINE = "14_DAYS";
export const REQUEST_INIT_PAGES = 1;
export const REQUEST_INIT_SPACING = "SINGLE";
export const REQUEST_INIT_TYPE = "ARTICLE";
export const REQUEST_INIT_DIGITAL_COPIES = false;
export const REQUEST_INIT_WRITER_ID = "";
export const REQUEST_INIT_DISCOUNT_CODE = "";