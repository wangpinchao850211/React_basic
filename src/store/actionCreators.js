import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DETELE_TODO_ITEM, INIT_LIST } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DETELE_TODO_ITEM,
    index
});

export const initList = (data) => ({
    type: INIT_LIST,
    data
});
// redux 使用thunk进行ajax请求
export const getList = () => {
    return (dispatch) => {
        axios.get('/mock/jsMock.json').then((res) => {
            console.log(res)
            const data = res.data;
            const action = initList(data);
            dispatch(action);
        })
        .catch((err) => console.log(err))
        .finally((d) => console.log(d));
    }
}