import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DETELE_TODO_ITEM } from './actionTypes';
const defaultState = {
    inputValue: '',
    list: []
};
// reducer 可以接受state，但是绝不能修改state
// 纯函数定义：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
    // console.log(action);
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DETELE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}