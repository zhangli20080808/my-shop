import React from 'react';

export default class Shipping extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">顾客导读</h2>
				<div className="help-inner">
					<div className="help-sec">
						<h3>免税代发声明</h3>
						<p>“If there is a difference between: a) the amount of goods declared by the customer to NZH to be declared
							for export and shipped by NZH from New Zealand to overseas, and b) the actual amount of goods included in
							the export shipment,
							and it is determined that a supply made under or in accordance with this receipt/invoice is chargeable
							with GST other than at a rate of zero percent, then the customer will pay any GST and any default GST, as
							well as any related use of money interest and / or penalties, to NZH within two Business Days of demand by
							NZH.”</p>
					</div>
					<div className="help-sec">
						<h3>如何联系客服？</h3>
						<p>Hi！亲爱的会员~NZH希望您在这里得到愉快的购物体验！您在购物中遇到任何问题可以直接联系我们客服咨询哈~</p>
					</div>
					<div className="help-sec">
						<p>联系方法</p>
						<p>公众号“NZH为您服务”里，在微信聊天对话框输入文本，呼叫客服，我们的客服会在第一时间响应您哦~</p>
						<img src="/images/lxkf-1.jpg" width="400" style={{marginTop: '10px'}}/>
					</div>
					<div className="help-sec">
						<p>提示：PC端用户可以扫码（二维码位置：网站首页顶部）进入”NZH为您服务“微信公众号进行客服咨询哦~~如图：</p>
						<img src="/images/lxkf-2.jpg" width="600" style={{marginTop: '10px'}}/>
					</div>
				</div>
			</div>
		)
	}
}