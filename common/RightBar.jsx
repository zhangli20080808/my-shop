import React from 'react';

class TopBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	backToTop = () => {
		$('html, body').animate({scrollTop: 0}, 500)
	};

	handdleQrcode = (flag) => {
		if (flag === 'show') {
			this.setState({
				qrcodeFlag: true
			})
		} else {
			this.setState({
				qrcodeFlag: false
			})
		}
	};

	render = () => {
		// const {companyInfo, cartNum} = this.props,
		const {cartNum,userInfo} = this.props,
			{qrcodeFlag} = this.state;

		return (
			<div className="rbar-section">
				<ul>
					<li>
						<a target="_blank" href={userInfo?"/cart":'/user/login'}>
							<i className="bg rbar-cart"/>
							购<br/>物<br/>车
							<span className="rbar-num">{cartNum}</span>
						</a>
						<span className="rbar-line"/>
					</li>
					{/*<li>
						<a target="_blank" href="/coupon">
							<i className="bg rbar-coupon"/>
							优<br/>惠<br/>券
						</a>
						<span className="rbar-line"/>
					</li>*/}
					<li
						className="rbar-server-bar"
						onMouseEnter={this.handdleQrcode.bind(this, 'show')}
						onMouseLeave={this.handdleQrcode.bind(this, 'hide')}>
						<a>
							<i className="rbar-server"/>
							联<br/>系<br/>客<br/>服
						</a>
						<span className="rbar-line"/>
						{qrcodeFlag ?
							<div className="rbar-server-box add-cart-animated add-qrcode-zoomIn">
								<div className="triangle_border_right"/>
								{/*<img src={companyInfo.qrcode}/>*/}
								<p>扫码联系公众号客服</p>
							</div> : ''
						}
					</li>
				</ul>
				<div className="rbar-top-box" onClick={this.backToTop}>
					<span className="rbar-line"/>
					<span className="bg rbar-top"/>
				</div>
			</div>
		)
	}
}

export default TopBar;