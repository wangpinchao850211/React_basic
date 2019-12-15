import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducer';
// import createSagaMiddleware from 'redux-saga';
// import mySaga from './sagas';

// thunk 进行ajax请求
const store = createStore(allReducer, applyMiddleware(thunk));

// Used the saga 进行ajax请求方法 create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(allReducer, applyMiddleware(sagaMiddleware));
// then run the saga
// sagaMiddleware.run(mySaga);

export default store;
