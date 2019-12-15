import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false, // 确定搜索框显示
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true); // immutable 数据设置新值的方法
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({ // merge是链式set的写法,性能更高,只调用一次
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}