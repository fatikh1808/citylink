import { combineReducers } from "redux";

import cartReducer from './cart';
import catalogReducer from './catalog';
import authReducer from './auth'
import stepperReducer from "./stepper";

export default combineReducers({
    cartReducer,
    catalogReducer,
    stepperReducer,
    authReducer
})