import { createStore, combineReducers } from "redux";
import formReducer from './reducers/formReducers';

const rootReducer = combineReducers({
    formReducer
});

export const store = createStore(rootReducer);
