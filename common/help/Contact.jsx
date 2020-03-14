import React from 'react';

export default class About extends React.Component {
	render = () => {
		const {companyInfo} = this.props,
			{
				brand,
				qrcode,
				address,
				business,
				complain,
				strategic,
				wechatService,
				customerService
			} = companyInfo;

		return (
			<div className="about-section">
				<h2 className="help-s2-title">联系我们</h2>
				<div className="help-inner">
					<div className="help-sec">
						<h3>联系地址</h3>
						<p>{address}</p>
					</div>
					<div className="help-sec">
						<h3>邮件地址</h3>
						<p>商务洽谈：{business}</p>
						<p>投诉建议：{complain}</p>
						<p>战略合作：{strategic}</p>
						<p>品牌合作：{brand}</p>
					</div>
					<div className="help-sec">
						<h3>客户服务</h3>
						<p>{customerService}</p>
					</div>
					<div className="help-sec">
						<h3>联系微信</h3>
						<p>{wechatService}</p>
						<img width="130" src={qrcode}/>
					</div>
				</div>
			</div>
		)
	}
}