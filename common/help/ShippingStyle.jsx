import React from 'react';

export default class ShippingStyle extends React.Component {
	render = () => {
		const {companyInfo} = this.props;
		return (
			<div className="about-section">
				<h2 className="help-s2-title">配送方式及要求</h2>
				<div className="help-inner">
					<div className="help-sec">
						<p>进入购物车页面后，系统会默认为您选择我们的合作快递公司发货。您也可以根据自己喜好选择您想要的快递公司发货</p>
					</div>
					<div className="help-sec">
						<img width={500} src={"/images/help/help-ps1.png"}/>
					</div>
					<div className="help-sec">
						<h3>合作快递公司： 程光  富腾达</h3>
					</div>
					<div className="help-sec">
						<img src="/images/cg.png"/>
						<p>官网：<a target={"_blank"} href={"http://www.flywayex.com/"}>http://www.flywayex.com/</a></p>
						<p>直邮配送到中国大陆：保健品2-3周工作日, 奶粉4-6周</p>
					</div>
					<div className="help-sec">
						<img src="/images/ftd.png"/>
						<p>官网：<a target={"_blank"} href={"http://www.ftd.nz/?from=ftdlogistics.co.nz"}> http://www.ftd.nz/?from=ftdlogistics.co.nz</a></p>
						<p>直邮配送到中国大陆：保健品2-3周工作日, 奶粉4-6周</p>
					</div>
					<div className="help-sec">
						<p>1. 港、澳、台直邮配送运费及要求请咨询公众号客服。</p>
						<p>2. 物流发货每个包裹要求：</p>
						<p>1.重量不得超过6公斤；</p>
						<p>2.纯化妆品：总数不超过3件，礼盒套装限1件；</p>
						<p>3.纯洗护类产品：每个包裹不超过6件;</p>
						<p>4.混装包裹：包裹商品总数不超过10件，其中洗护用品不超过4件，化妆品不超过2件;</p>
					</div>
					<div className="help-sec">
						<h3>注意事项：</h3>
						<p>1.每个订单务必仔细填写收件人姓名（必须是中文，必须与收件人证件姓名相符），电话（必须保持畅通），地址检查核对是否正确。如因个人原因造成无法派送或者产生的二次派送费，由个人自行承担；</p>
						<p>2.订单时效为48小时，请及时付款 以免出现缺货等情况 超过时限的订单将被自动取消 敬请注意；</p>
						<p>3.因为气温的原因导致的胶囊内部破裂（冻裂）、口红融化、软糖融化等，将不予赔付，由于夏季各地区温度较高，容易导致胶囊、软糖严重融化，该情况也不予赔付，肥皂属于特殊产品，如果在运输过程中出现破裂变形等现象均不影响使用，也不予赔付，敬请注意。</p>
						<p>4. 如有任何问题或特殊配送需求请在下单前咨询公众号客服</p>
						<img src={companyInfo.qrcode} width={150}/>
					</div>
				</div>
			</div>
		)
	}
}

