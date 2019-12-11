import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import HomeLayout from './home_layout/homeLayout';
import RouteBasic from './route_basic/route';
import From from './Form/Form';
import Animation from './animation';
import './index.css';

// class HomeLayout extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <Link to="/routebasic">路由基础</Link>
                // <br/>
                // <Link to="/routebasic/123">带参数的路由基础</Link>
                // <br/>
                // <Link to="/form">form表单</Link>
                // <br />
                // <Link to="/routebasic/sub">form/sub</Link>
//                 {this.props.children}
//             </div>
//         )
//     }
// }

export default class Home extends Component {
    render() {
        return (
            // Link 必须放到Router组件里才不报警告
            <div>
                <Router>
                    <Link to="/routebasic">路由基础</Link>
                    <br/>
                    <Link to="/routebasic/123">带参数的路由基础</Link>
                    <br />
                    <Link to="/routebasic/sub">form/sub</Link>
                    <br/>
                    <Link to="/form">form表单</Link>
                    <br/>
                    <Link to="/animation">reactcss过渡动画</Link>
                    <Route path="/routebasic" component={RouteBasic}></Route>
                    <Route path="/form" component={From}></Route>
                    <Route path="/animation" component={Animation}></Route>
                </Router>
            </div>
            
        )
    }
}