import React from 'react';
import common from './common';
import config from '../config/feConfig';

const companyName = config.companyName;


class PersonalBar extends React.Component {

	/**
	 * 切换账号
	 */
	changeAccount = () => {
		common.sendRequest('get', {}, '/user/logout', (res) => {
			if (res.code === 0) {
				window.location.href = "/user/login";
			}
		});
	};

	render = () => {
		const {flag, userInfo} = this.props,
			avatarUrl = userInfo && userInfo.avatarUrl ? userInfo.avatarUrl : '/images/portrait.png';

		return (
			<div className="personal-center">
				<div className="personal-center-top">
					<div className="portrait-box">
						<div className="portrait" style={{backgroundImage: "url(" + avatarUrl + ")"}}/>
					</div>
					<div className="personal-info">
						{/* <p>
              {info.primeEndTime && info.primeEndTime >= currentTime ?
                <img className="prime-logo" src="/images/prime-logo.png"/> : ''
              }
              {info.fullName ? info.fullName : info.loginName}
            </p>*/}
						{userInfo.monthlyStatement ?
							<p>月结用户</p> : ''
						}
					</div>
					<a className="change-account" onClick={this.changeAccount}>切换账号</a>
				</div>
				<div className="personal-center-bottom">
					<ul>
						<li>
							<a href="/userInfo" className={flag === 'info' ? 'personal-cur' : ''}>个人信息</a>
						</li>
						{/*<li>
              <a href="/prime" className={flag == 'prime' ? 'personal-cur' : ''}>Prime会员</a>
            </li>*/}
						<li>
							<a href="/order" className={flag === 'order' ? 'personal-cur' : ''}>订单管理</a>
						</li>
						{/*<li>
							<a href="/coupon" className={flag === 'coupon' ? 'personal-cur' : ''}>我的优惠券</a>
						</li>*/}
						{/*<li>
							<a href="/favorite" className={flag === 'favorite' ? 'personal-cur' : ''}>我的收藏夹</a>
						</li>*/}
								{/*<li>
									<a href="/recharge" className={flag === 'recharge' ? 'personal-cur' : ''}>账户余额</a>
								</li>*/}
						{/*<li>
							<a href="/address" className={flag === 'addr' ? 'personal-cur' : ''}>地址管理</a>
						</li>*/}
						<li>
							<a href="/modifyPassword" className={flag === 'modifyPassword' ? 'personal-cur' : ''}>修改密码</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default PersonalBar;
