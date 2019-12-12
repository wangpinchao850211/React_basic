import React, { Component } from 'react'
import '../assets/iconfont/iconfont.css'; // 直接引入生成的icon的css文件
import './style.js';
import { getList, getInitList } from '../store/actionCreators';
import store from '../store';
import Header from './header';

export default class JanShu extends Component {
    
    render() {
        return (
            <div style={{height: '100vh', background: '#fff'}}>
                <Header></Header>
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
