import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
/**
 * BrowserRouter:url为正常页面的url
    HashRouter： url显示为hash模式
    MemoryRouter: 常用于react-native
    Route:用于定义规则
    Link:用于定义跳转链接
*/
import AliCloud from './alicloud.modle';
import Home from './home.modle';
import notComponent from './notComponent';

const routes = [
    {
        path: "/",
        exact: true,
        method: ()=> (<Redirect to="/home"/>)
    },
    {
        path: "/home",
        sidebarName: 'Go home',
        main: () => <Home />
    },
    {
        path: "/alicloud",
        sidebarName: 'Ali-cloud',
        main: () => <AliCloud />
    }
];

// React16之后的用Forwarding Refs
// React.forwardRef类似一个HOC，参数是一个function，这个function包含两个参数props和ref，返回Component，可以将这个ref用于任何子组件或者DOM
const Minibar = React.forwardRef((props, ref) => {
    return (
      <div className="minibar" ref={ref} onClick={props.onClick}>
          Pro
      </div>
    );
});

export default class RouteMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false
        }
        this.sidebar = React.createRef();
        this.miniSidebar = React.createRef();
    }
    componentDidMount() {
            this.animationBar.bind(this);
    }
    updateHandle = () => {
        console.log('每次router变化之后都会触发')
        if (this.state.sidebar) {
            // this.animationBar(); // 缩回动画待弄
            this.setState({sidebar: false});
        }
    }
    updateSidebar() {
        this.setState({sidebar: true});
        this.animationBar.bind(this);
    }
    animationBar() {
        const barEl = this.sidebar;
        const miniEl = this.miniSidebar;
        console.log(barEl.current);
        console.log(miniEl);
        // const animaInterVal = setInterval(() => {
        //     if (barEl.style.left > -100) {
        //         barEl.style.left -=  '10px';
        //     } else {
        //         clearInterval(animaInterVal);
        //     }
        // }, 80);
        
    }
    render () {
        return (
            // Router中只能有一个子元素
            <Router>
              <div className="routeWrapper">
                {this.state.sidebar?<ul className="sidebar" ref={this.sidebar}>
                        {routes.map((item, index) => (
                            <li key={index} onClick={this.updateHandle.bind(this)}>
                                <Link to={item.path}>{item.sidebarName}</Link>
                            </li>
                        ))}
                </ul>:<Minibar ref={this.miniSidebar} onClick={this.updateSidebar.bind(this)} />}
                {/* path定义路由的url
                exact表示严格匹配,匹配到当前路由不再向下匹配
                component表示该条路由对应的组件, Switch 匹配到了就不会再向下匹配了*/}
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={route.method}
                            component={route.main}
                        />
                    ))}
                    <Route path="*" component={notComponent} />
                </Switch>
              </div>
            </Router>
          );
    }
    
  }

