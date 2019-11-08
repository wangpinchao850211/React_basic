import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/routebasic">路由基础</Link>
                <br/>
                <Link to="/routebasic/123">带参数的路由基础</Link>
                <br/>
                <Link to="/form">form表单</Link>
                <br />
                <Link to="/routebasic/sub">form/sub</Link>
                {this.props.children}
            </div>
        )
    }
}
