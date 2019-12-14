import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fouced: false
        }
        this.handleFouce = this.handleFouce.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
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
                        <CSSTransition
							in={this.state.fouced}
							timeout={200}
							classNames="slide"
						>
                            <NavSearch 
                                className={this.state.fouced ? 'fouced': ''}
                                onFocus={this.handleFouce}
                                onBlur={this.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.fouced ? 'iconfont fouced': 'iconfont'} >&#xe617;</i>
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
    handleFouce() {
        this.setState({
            fouced: !this.state.fouced
        })
    }
    handleBlur() {
        this.setState({
            fouced: !this.state.fouced
        })
    }
}
