import React, { Fragment, Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../containers/Login/store/actions';
import { getUserInfo } from '../../containers/Login/store/actions'
import styles from './style.css';
import withStyle from '../../withStyle';
import cookies from 'jscookie'


class Header extends Component {
	componentDidMount() {
		const {isLogin, userInfo ,getUserInfo}= this.props
		console.log(this.props)
		const token = cookies.get('authorization')
		if (isLogin) {
			if (!userInfo) {
				getUserInfo()
			}
		}else{
			if(token){
				getUserInfo()
			}
		}
	}
	render() {

		const { userInfo, shopInfo, handleLogout } = this.props;
		return (
			<div className={styles.container}>

				<Link to='/' className={styles.item}>首页</Link>
				{
					shopInfo ? <Fragment>
						<div>{shopInfo.phone}</div><div>{shopInfo.email}</div>
						<Link to='/translation' className={styles.item}>翻译列表</Link>
					</Fragment> : ''
				}
				{
					userInfo ?
						<span>{userInfo.loginName}<span onClick={handleLogout} className={styles.item}>退出</span></span> : <span><Link to='/register' className={styles.item}>注册</Link><Link to='/login' className={styles.item}>登录</Link></span>
				}
			</div>
		)
	}
}

const mapState = (state) => ({
	shopInfo: state.header.shopInfo,
	userInfo: state.login.userInfo,
	isLogin: state.login.isLogin
});

const mapDispatch = (dispatch) => ({
	handleLogout() {
		dispatch(logout())
	},
	getUserInfo() {
		dispatch(getUserInfo())
	}
})

export default connect(mapState, mapDispatch)(withStyle(Header, styles));

