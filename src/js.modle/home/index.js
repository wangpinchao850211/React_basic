import React, { Component } from 'react';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class JsHome extends Component {
	constructor(props) {
		super(props);
		this.bindEvents();
	}

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

    render() {
        return (
            <HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
			</HomeWrapper>
        )
	}
	componentDidMount() {
		this.props.changeHomeData();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		console.log(this.props.changeScrollTopShow('ooooo'));
		window.addEventListener('scroll', this.props.changeScrollTopShow('ooooo'));
	}
}

const mapState = (state) => {
	return {
		showScroll: state.getIn(['home', 'showScroll'])
	}
}

const mapDispatch = (dispatch) => {
	return {
		changeHomeData() {
			dispatch(actionCreators.getHomeInfo());
		},
		changeScrollTopShow(s) {
			console.log(s);
			console.log('pppppppppppppp');
			console.log(document.documentElement.scrollTop);
			if (document.documentElement.scrollTop > 100) {
				dispatch(actionCreators.toggleTopShow(true))
			}else {
				dispatch(actionCreators.toggleTopShow(false))
			}
		}
	}
};

export default connect(mapState, mapDispatch)(JsHome);
