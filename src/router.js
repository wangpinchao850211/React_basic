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
import Dzdp from './dzdp.modle';
import notComponent from './notComponent';

import ThemeContext from './theme.context';

const theme = {
  light: {
    classnames: 'btn-light',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    classnames: 'btn-dark',
    bgColor: '#222222',
    color: '#fff'
  }
}

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
        path: "/dzdp",
        sidebarName: '大众点评',
        main: () => <Dzdp />
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
            sidebar: false,
            theme: 'dark',
        }
        this.sidebar = React.createRef();
        this.miniSidebar = React.createRef();
    }
    componentDidMount() {}
    routechange() {
        console.log('每次router变化之后都会触发')
    }
    updateHandle = () => {
        if (this.state.sidebar) {
            this.animationBar(); // 缩回动画待弄
        }
    }
    updateSidebar() {
        this.setState({sidebar: true});
    }
    animationMiniBar() {
        const miniEl = this.miniSidebar;
        miniEl.current.className = `${miniEl.current.className} removeMinibar`;
        setTimeout(() => { // minibar缩回去之后再调隐藏函数
            this.updateSidebar(); 
        },600);
    }
    animationBar() {
        const barEl = this.sidebar;
        barEl.current.className = `${barEl.current.className} removeSidebar`;
        setTimeout(() => { // 动画执行完毕,再隐藏
            this.setState({sidebar: false});
        }, 800);
    }
    render () {
        return (
            // Router中只能有一个子元素
            // 使用value传入值，在form组件里进行使用主题切换留言板背景色,可以在这个顶层组件指定两个按钮进行theme主题的切换
            <ThemeContext.Provider value={theme[this.state.theme]}>
                <Router onUpdate={this.routechange.bind(this)}>
                    <div className="routeWrapper">
                        {this.state.sidebar?<ul className="sidebar" ref={this.sidebar}>
                                {routes.map((item, index) => (
                                    <li key={index} onClick={this.updateHandle.bind(this)}>
                                        <Link to={item.path}>{item.sidebarName}</Link>
                                    </li>
                                ))}
                        </ul>:<Minibar ref={this.miniSidebar} onClick={() => {this.animationMiniBar();}} />}
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
            </ThemeContext.Provider>
          );
    }
    
  }

