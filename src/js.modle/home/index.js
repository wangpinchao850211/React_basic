import React, { Component } from 'react';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';
import Topic from './components/Topic';

export default class JsHome extends Component {
    render() {
        return (
            <HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					{/* <List /> */}
				</HomeLeft>
				<HomeRight>
					{/* <Recommend />
					<Writer /> */}
				</HomeRight>
				{/* { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null} */}
			</HomeWrapper>
        )
    }
}