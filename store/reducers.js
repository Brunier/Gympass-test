import { combineReducers } from 'redux';

//Reducers
import repository from './repository/repositoryReducer';
import user from './user/userReducer';

const rootReducer = combineReducers({
    repository,
    user
});

export default rootReducer;
