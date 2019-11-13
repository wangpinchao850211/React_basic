import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './route.css';

export default class RouteBasic extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.match.path);
    }
    render() {
        return (
            <div className="routeBasic">
                组件route_basic
                
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(route) =>{
                        console.log(route);
                        return (
                            <p>当前组件是不带参数route_basic</p>
                        )
                    }} />
                    <Route path={`${this.props.match.path}/sub`} render={(route) =>{
                        console.log(route);
                        return (
                            <p>当前组件是Sub</p>
                        )
                    }} />
                    <Route path={`${this.props.match.path}/:id`} render={(route) =>{
                        console.log(route);
                        return (
                            <p>当前组件是带参数route_basic,参数是: {route.match.params.id}</p>
                        )
                    }} />
                    <Route path="*"  render={(route) =>{
                        console.log(route);
                        return (
                            <p>什么都没匹配上</p>
                        )
                    }}/>
                </Switch>
            </div>
        )
    }
}
