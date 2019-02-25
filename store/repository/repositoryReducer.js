import * as types from '../actionsTypes';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
    repository: "",
    commits: "",
    loadingSearch: false,
    errorSearch: ""
});

export default function connectorsReducer(state = initialState, action) {
    switch (action.type) {
        case types.SELECT_REPOSITORY:
            return state.merge({
                repository: action.loadData
            });

        case types.SET_COMMITS:
            return state.merge({
                commits: action.loadData
            });

        case types.LOAD_SEARCH_COMMIT:
            return state.merge({
                loadingSearch: action.loadData
            });

        case types.ERROR_SEARCH_COMMIT:
            return state.merge({
                errorSearch: action.loadData
            });

        default:
            return state;
    }
}
