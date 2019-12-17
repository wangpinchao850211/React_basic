import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem, Addition, Button, SearchWrapper } from './style.js';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fouced: false
        }
        this.handleFouce = this.handleFouce.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) { // 判断只有ajax返回数据再进行ui组件的渲染
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
                        {pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
    render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return ( 
            <HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left '>下载APP</NavItem>
                    <NavItem className='right '>登录</NavItem>
                    <NavItem className='right '>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
                            <NavSearch 
                                className={focused ? 'fouced': ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont fouced zoom': 'iconfont zoom'} >&#xe617;</i>
                        {this.getListArea()}
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

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		// login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, ''); // 不是数字的字符串替换成空字符串
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else { // 切换回第一页
				dispatch(actionCreators.changePage(1));
			}
		},
		// logout() {
		// 	dispatch(loginActionCreators.logout())
		// }
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
