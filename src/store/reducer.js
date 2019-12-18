import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../js.modle/header/store';
import { reducer as homeReducer } from '../js.modle/home/store';
import { reducer as detailReducer } from '../js.modle/detail/store';
// import todoListReducer from './todoListReducer';

const allReducer = combineReducers({
    // todolist: todoListReducer,
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
});

export default allReducer;
