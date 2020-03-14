import React from 'react';

export default class IdCard extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">身份证上传：</h2>
				<div className="help-inner">
					<div className="help-sec">
						<p>根据中国海关总署修订后的《中华人民共和国海关对进出境快件监管办法》以及《海关总署公告2016年第19号》，入境到中国大陆的个人包裹经海关查验需向海关提供收件人身份证件 (彩色) 等相关信息。
							海关网站相关规定：中华人民共和国海关总署官方网站
							因此在您订单成功提交后，需要到快递官方网站上传收件人身份证正反面清晰的彩色照片。同一个收件人在每一个物流公司只需上传一次即可。如未按照要求及时上传身份证导致海关扣押包裹，延误清关，延期不能抵达的，本公司不负相关责任。</p>
					</div>
					<div className="help-sec">
						<h3>操作步骤：</h3>
						<p>1.填入姓名、身份证号、运单号</p>
						<p>2.上传身份证正反面照片</p>
						<p>3.确认提交</p>
						<p>新西兰仓-程光快递公司：<a target={"_blank"} href={"http://www.flywayex.com/"}>http://www.flywayex.com/</a></p>
						<p>新西兰仓-富腾达快递公司：<a target={"_blank"} href={"http://www.ftd.nz/?from=ftdlogistics.co.nz"}>http://www.ftd.nz/?from=ftdlogistics.co.nz</a></p>
						<p>您也可以微信扫一扫，通过快递公司的官方公众号进行上传：</p>
						<div>
							<div style={{display: 'inline-block', textAlign: 'center', marginRight: '15px'}}>
								<img width={"150"} src={"http://inc.ftd.nz/images/ftdwx.jpg"}/>
								<p> FTD富腾达 </p>
							</div>
							<div style={{display: 'inline-block', textAlign: 'center'}}>
								<img width={"150"} src={"http://www.flywayex.com/images/wx.jpg"}/>
								<p> 程光快递 </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}