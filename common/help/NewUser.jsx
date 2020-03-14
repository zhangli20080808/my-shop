import React from 'react';

export default class NewUser extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">NZH康尔佳线上购物，只需5步 手把手教你学会购物</h2>
				<div className="help-inner">
					<div className="help-sec">
						<h3>1、获取账号：</h3>
						<p>登录http://nzhg.co.nz/或者关注NZH为您服务公众号，只需一个手机号即可快速完成注册，注册成功后别忘了联系客服绑定微信</p>
						<img width={"800"} src={"/images/help/help-new1.png"}/>
						<div>
							<div style={{display: 'inline-block', marginRight: '15px'}}>
								<img width={"270"} src={"/images/help/help-new2.png"}/>
							</div>
							<div style={{display: 'inline-block'}}>
								<img width={"270"} src={"/images/help/help-new3.png"}/>
							</div>
						</div>
					</div>
					<div className="help-sec">
						<h3>2、挑选宝贝：</h3>
						<p>搜索关键词，找到您需要的宝贝</p>
						<p>例如：</p>
						<img src={"/images/help/help-new4.png"}/>
						<p>选择想要采购商品的发货仓库</p>
						<img src={"/images/help/help-new5.png"}/>
						<p>将选中的宝贝放入购物车以免错过</p>
						<img src={"/images/help/help-new6.png"}/>
						<p>商品问题可以通过公众号联系客服</p>
						<img src={"/images/help/help-new7.png"}/>
					</div>
					<div className="help-sec">
						<h3>3、结算宝贝：</h3>
						<p>去购物车结算</p>
						<img width={"800"} src={"/images/help/help-new8.png"}/>
						<p>提交订单前，请填写正确的收货地址和发件人信息确认购物信息</p>
						<img src={"/images/help/help-new9.png"}/>
					</div>
					<div className="help-sec">
						<h3>4、支付：</h3>
						<p>选择想要的支付方式，按要求支付，银行转账成功后截图给公众号客服</p>
					</div>
					<div className="help-sec">
						<h3>5、收货：</h3>
						<p>时效：新西兰直邮仓包裹发出后2-3周工作日</p>
					</div>
					<div className="help-sec">
						<h3>6、售后问题：</h3>
						<p>售后问题请参考售后须知，及时联系客服</p>
					</div>
				</div>
			</div>
		)
	}
}