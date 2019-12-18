import React, { Component } from 'react'
import '../assets/iconfont/iconfont.css'; // 直接引入生成的icon的css文件
import './style.js';
import { getList, getInitList } from '../store/actionCreators';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../store';
import Header from './header';
import JsHome from './home';
import Detail from './detail/loadable.js'; // 异步加载组件的能力
import Login from './login';
import Write from './write';

// window.onbeforeunload = function() {
//     console.log('sssssssssssssss');
//     window.sessionStorage.removeItem('login');
//     return false;
// }

export default class JanShu extends Component {

    constructor(props) {
        super(props);
        // 在react中这种都没好使，写在component外面能打印到！！！
        window.onbeforeunload = function() {
            console.log('sssssssssssssss');
            window.alert('wpc');
        }
        window.addEventListener('beforeunload', function() { // 这个进了
            console.log('yyyyyyyyyyyyyyyy');
            window.alert('refrec');
            // return false;
        });
    }
    
    render() {
        return (
            <div style={{background: '#fff'}}>
                <Provider store={store}>
                    <Header></Header>
                    <BrowserRouter>
                        <div>
                            <Route path='/js' exact component={JsHome}></Route>
                            <Route path='/js/login' exact component={Login}></Route>
                            <Route path='/js/write' exact component={Write}></Route>
                            <Route path='/js/detail/:id' exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
    componentDidMount() {
        // 自动调用action的thunk函数，会触发闭包函数的调用（thunk暂时注销，使用saga）
        // const action = getList();
        // store.dispatch(action);

        // 派发正常action
        const action = getInitList();
        store.dispatch(action);
    }
}
