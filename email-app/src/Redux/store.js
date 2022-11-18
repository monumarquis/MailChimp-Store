import {
    legacy_createStore , combineReducers, 
    applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";
    import { reducer } from './reducer'

    const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const rootReducer = combineReducers({
        store:reducer,
        
    });
    export const store = legacy_createStore(rootReducer,
        createComposer(applyMiddleware(thunk)));
    