import * as types from '../actionsTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    repos: null,
    name: null,
    img: null,
    loading: false,
    error: null
});

export default function connectorsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_USER_NAME:
            return state.merge({
                name: action.loadData
            });

        case types.GET_USER_IMG:
            return state.merge({
                img: action.loadData
            });

        case types.GET_USER_REPOS:
            return state.merge({
                repos: action.loadData
            });

        case types.GET_USER_LOADING:
            return state.merge({
                loading: action.loadData
            });

        case types.USER_ERROR:
            return state.merge({
                error: action.loadData
            });



        default:
            return state;
    }
}
