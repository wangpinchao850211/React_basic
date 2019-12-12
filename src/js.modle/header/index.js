import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';

export default class Header extends Component {
    render() {
        return ( 
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left '>下载APP</NavItem>
                    <NavItem className='right '>登录</NavItem>
                    <NavItem className='right '>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <i className="iconfont">&#xe617;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe6a4;</i>
                        <span style={{marginLeft: '5px'}}>写文章</span>
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
