import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
	render() {
		const { loginStatus } = this.props;
		console.log(loginStatus);
		console.log(window.sessionStorage.getItem('login'));
		const session = window.sessionStorage.getItem('login');
		if (JSON.parse(JSON.stringify(session))) {
			return (
				<div>写文章页面</div>
			)
		}else {
			return <Redirect to='/js/login'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);