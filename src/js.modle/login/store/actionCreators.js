import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/mock/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			console.log(result);
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}