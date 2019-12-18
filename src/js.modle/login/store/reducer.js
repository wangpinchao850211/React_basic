import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	login: false
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_LOGIN:
			// 登录存入session
			window.sessionStorage.setItem('login', action.value);
			return state.set('login', action.value);
		case constants.LOGOUT:
			// 登出移除session
			window.sessionStorage.removeItem('login');
			return state.set('login', action.value);
		default:
			return state;
	}
}