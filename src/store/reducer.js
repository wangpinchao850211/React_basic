import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../js.modle/header/store';
// import todoListReducer from './todoListReducer';

const allReducer = combineReducers({
    // todolist: todoListReducer,
    header: headerReducer
});

export default allReducer;
