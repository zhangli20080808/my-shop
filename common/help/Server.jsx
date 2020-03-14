import React from 'react';

export default class Server extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">客服服务</h2>
				<div className="help-inner">
					<div className="help-sec">
						<p>我们致力于做新西兰最好的代购商服务平台。</p>
					</div>
					<div className="help-sec">
						<h3>温馨提示：</h3>
						<p>为了减少您的等待时间，您不妨先仔细阅读常见问题。查询物流状态可以通过「我的订单」进入订单信息列表进行点击查看，无需联系客服。如有问题仍无法解决，您可以联系我们。</p>
					</div>
				</div>
			</div>
		)
	}
}