import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
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
		// const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		// const newList = list.toJS();
		// const pageList = [];

		// if (newList.length) {
		// 	for (let i = (page - 1) * 10; i < page * 10; i++) {
		// 		pageList.push(
		// 			<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
		// 		)
		// 	}
		// }

		if (this.state.fouced) {
			return (
				<SearchInfo 
					// onMouseEnter={handleMouseEnter}
					// onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch 
							// onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							{/* <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i> */}
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
                        {/* {pageList} */}
                        <SearchInfoItem key="1">qwedqw</SearchInfoItem>
                        <SearchInfoItem key="2">qwedqw</SearchInfoItem>
                        <SearchInfoItem key="3">qwedqw</SearchInfoItem>
                        <SearchInfoItem key="4">qwedqw</SearchInfoItem>
                        <SearchInfoItem key="5">qwedqw</SearchInfoItem>
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
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
		// list: state.getIn(['header', 'list']),
		// page: state.getIn(['header', 'page']),
		// totalPage: state.getIn(['header', 'totalPage']),
		// mouseIn: state.getIn(['header', 'mouseIn']),
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
		// handleMouseEnter() {
		// 	dispatch(actionCreators.mouseEnter());
		// },
		// handleMouseLeave() {
		// 	dispatch(actionCreators.mouseLeave());
		// },
		// handleChangePage(page, totalPage, spin) {
		// 	let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
		// 	if (originAngle) {
		// 		originAngle = parseInt(originAngle, 10);
		// 	}else {
		// 		originAngle = 0;
		// 	}
		// 	spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

		// 	if (page < totalPage) {
		// 		dispatch(actionCreators.changePage(page + 1));
		// 	}else {
		// 		dispatch(actionCreators.changePage(1));
		// 	}
		// },
		// logout() {
		// 	dispatch(loginActionCreators.logout())
		// }
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
