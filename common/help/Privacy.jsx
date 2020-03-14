import React from 'react';

export default class Privacy extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">隐私保护</h2>
				<div className="help-inner">
					<div className="help-sec">
						<h3>个人信息：</h3>
						<p>我们不会收集您的任何个人信息（如您的真实姓名、地址、电话号码或邮件地址），除非您（在注册时）自愿提供。此时我们会征得您的同意，或者保护个人数据的相关法律法规允许保护您的个人数据。</p>
					</div>
					<div className="help-sec">
						<h3>用途：</h3>
						<p>一般情况下，您提供给我们的个人信息，我们用来回复您的询问，处理您的订单或为您提供相关信息，以满足您的订单等购物服务，我们还会利用这些信息来支持您与您的客户的联系（保存收货地址与发件人信息）：</p>
						<p>· 我们储存并处理这些个人数据，以便更好地了解您的业务需求、改进我们的产品和服务；</p>
						<p>· 我们会使用这些个人信息联系您，提供支持以便更好地理解我们客户的需求；</p>
						<p>· 若您拒绝我们使用您的个人数据来支持我们的客户关系，我们也将尊重您的选择。</p>
					</div>
				</div>
			</div>
		)
	}
}