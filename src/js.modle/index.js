import React, { Component } from 'react'
import './index.css';
import { getList, getInitList } from '../store/actionCreators';
import store from '../store';

export default class JanShu extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                简书页面
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
