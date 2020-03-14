import React from 'react';

export default class Pay extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">支付方式</h2>
				<div className="help-inner">
					<div className="help-sec">
						<h3>方式一：微信支付</h3>
						<p>
							<img width={"800"} src={"./images/help/help-pay1.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>选择“立即支付”后，扫一扫微信支付码付款</p>
						<p>
							<img width={"300"} src={"./images/help/help-pay2.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>付款成功后，点击已完成付款</p>
					</div>
					<div className="help-sec">
						<h3>方式二：支付宝支付</h3>
						<p>
							<img width={"800"} src={"./images/help/help-pay3.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>选择“立即支付”后，进入支付宝付款页面，扫一扫支付二维码付款</p>
						<p>
							<img width={"300"} src={"./images/help/help-pay4.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>付款成功，将付款记录截图给公众号客服</p>
					</div>
					<div className="help-sec">
						<h3>方式三：余额支付</h3>
						<p>如果您在康尔佳已充值账户，只需使用余额即可轻松付款，方便快捷</p>
					</div>
					<div className="help-sec">
						<h3>方式四：纽币银行转账</h3>
						<p>
							<img width={"800"} src={"./images/help/help-pay5.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>转账时记得在Reference上备注您的订单号，每一个订单的订单号都是不一样的</p>
						<p>转账成功后，将转账截图发给公众号客服</p>
					</div>
					<div className="help-sec">
						<h3>方式五：人民币银行转账</h3>
						<p>
							<img width={"800"} src={"./images/help/help-pay6.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>转账时记得在备注信息里填写您的订单号，每一个订单的订单号都是不一样的</p>
						<p>转账成功后，将转账截图发给公众号客服</p>
					</div>
				</div>
			</div>
		)
	}
}