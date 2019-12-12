import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initList } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    try {
        const res = yield axios.get('/mock/jsMock.json');
        console.log(res);
        const action = initList(res.data);
        yield put(action);    
    } catch (error) {
        console.log(error);
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
