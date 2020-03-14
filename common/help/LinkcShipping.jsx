import React from 'react';

export default class LinkcShipping extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">关于送货</h2>
				<div className="help-inner">
					<div className="help-sec">
						<img src={"/images/help/linkc-shipping1.jpg"} width={500}/>
					</div>
					<div className="help-sec">
						<h3>澳邮快递AuExpress</h3>
						<p>官网地址：http://www.auexpress.net/</p>
						<p>发货范围：中国大陆地区（港澳台除外）</p>
						<p>直邮时效：2-4周左右（需上传身份证照片及提供身份证相关信息）</p>
						<img src={"/images/help/linkc-shipping2.jpg"} width={500}/>
					</div>
					<div className="help-sec">
						<h3>EWE</h3>
						<p>官网地址：https://www.ewe.com.au/</p>
						<p>发货范围：中国大陆地区（港澳台除外）</p>
						<p>直邮时效：2-4周左右（需上传身份证照片及提供身份证相关信息）</p>
						<img src={"/images/help/linkc-shipping3.jpg"} width={500}/>
						<img src={"/images/help/linkc-shipping4.jpg"} width={500}/>
					</div>
				</div>
			</div>
		)
	}
}