import { CHANGE_LOGIN ,CHANGE_USERINFO,CHANGE_LOGUT} from './constants';
import cookies from 'jscookie'

const changeLogin = (payload) => ({
	type: CHANGE_LOGIN,
	payload
})

const changeUserInfo = (payload) => ({
	type: CHANGE_USERINFO,
	payload
})

const changeLogut = (payload) => ({
	type: CHANGE_LOGUT,
	payload
});


export const toLogin = (data) => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.post('/c/authenticate',data)
			.then((res) => {
                const authorization = res.data.idToken
                cookies.set({
                    name: 'authorization',
                    value: authorization
                  });
				// const list = res.data.data;
                dispatch(changeLogin(authorization))
			}).catch((err)=>{
				console.log(err)
			})
	}
} 
export const getUserInfo = ()=>{
    return (dispatch, getState, axiosInstance) => {
		return axiosInstance.get('/c/me')
			.then((res) => {
                console.log(res.data,'userinfo')             
                dispatch(changeUserInfo(res.data.data))
			}).catch((err)=>{
				console.log(err)
			})
	}
}

export const logout = () => {
	return (dispatch, getState, axiosInstance) => {
		return axiosInstance.get('/c/me')
			.then((res) => {
				console.log(res.data, 'userinfo')
                const data = res.data.data ? null:''
                cookies.del('authorization')
				dispatch(changeLogut(data))
			}).catch((err) => {
				console.log(err)
			})
	}
}