import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

function store(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    )
}

export default store();
