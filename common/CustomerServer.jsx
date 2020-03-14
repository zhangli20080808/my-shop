import React from 'react';

export default class CustomerServer extends React.Component {
	render = () => {
		const {
		    // companyInfo,
            flag
		} = this.props;

		return (
			<div className={flag ? "dialog-box2 server-box-mobile" : "dialog-box server-box"}>
				<div className={"dialog-main"}>
					<div className={"cart-coupon-detail clear-float"}>
						<h3>联系客服</h3>
						{/*<img className={"server-pic"} src={companyInfo.qrcode}/>*/}
						<img className={"server-pic"} src={'http://auhdev-10054974.file.myqcloud.com/qrcode/-VgelhOFkqR7FmCzT4BVbBrH.jpg'}/>
					</div>
					<div className={"dialog-btn"}>
						<a className={"confirm tt-confirm"} onClick={this.props.hideCustomerServer}>ok</a>
					</div>
				</div>
			</div>
		)
	}
}
