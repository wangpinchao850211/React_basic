import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

// thunk暂时注销
// const store = createStore(reducer, applyMiddleware(thunk));

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// then run the saga
sagaMiddleware.run(mySaga);

export default store;
