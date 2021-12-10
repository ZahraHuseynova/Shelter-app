import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import { commentReducer } from "./commentReducer";
import { animalReducer } from "./animalReducer";

export default combineReducers({
    auth:authReducer,
    form:formReducer,
    comments: commentReducer,
    animals: animalReducer,
});