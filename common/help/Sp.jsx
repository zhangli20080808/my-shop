import React from 'react';

export default class Sp extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">线上下单实拍快照</h2>
				<div className="help-inner">
					<div className="help-sec">
						<p>我们用心为您提供更好的服务</p>
						<p>点击网页上方“我的订单”</p>
						<p>
							<img width={"800"} src={"./images/help/help-sp1.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>公众号进入商城后，选择页面下方“个人”进入个人账户，点击“查看全部订单”如下图：</p>
						<p>
							<img width={"300"} src={"./images/help/help-sp2.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>在订单-快递单号：点击“实拍照片”</p>
						<p>
							<img width={"300"} src={"./images/help/help-sp3.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>发货实拍在仓库打包发货后立即上传，如下图:</p>
						<p>
							<img width={"300"} src={"./images/help/help-sp4.png"}/>
						</p>
					</div>
					<div className="help-sec">
						<p>注意：记得仔细核对发货货物是否正确，有无少件漏件 或者数量错误</p>
					</div>
				</div>
			</div>
		)
	}
}