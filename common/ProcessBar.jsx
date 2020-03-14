import React from 'react';

class ProcessBar extends React.Component {

	render = () => {
		let {companyInfo, flag} = this.props,
			currentStyle;

		switch (flag) {
			case 'cart':
				currentStyle = 'process-sd process-sd1';
				break;
			case 'confirm':
				currentStyle = 'process-sd process-sd2';
				break;
			case 'pay':
				currentStyle = 'process-sd process-sd3';
				break;
			case 'complete':
				currentStyle = 'process-sd process-sd4';
				break;
		}
		return (
			<div className="process-bar">
				<div className="inner clear-float">
					<div className="logo logo2">
						{/*<a title={companyInfo.name} href="/" target="_blank">
							<img src={companyInfo.logo}/>
						</a>*/}
					</div>
					<div className='process-wrap'>
						<div className={currentStyle}/>
						<i className="process-i process-i1"> 1
							<span
								className={flag ? 'red process-tip' : 'process-tip'}>
                购物车
              </span>
						</i>
						<i className="process-i process-i2"> 2
							<span className={flag === 'confirm' ? 'red process-tip' : 'process-tip'}>
                确认订单
              </span>
						</i>
						<i className="process-i process-i3"> 3
							<span className={flag === 'pay' ? 'red process-tip' : 'process-tip'}>支付</span>
						</i>
						<i className="process-i process-i4">
							<img src="/images/right.png" width="23" height="23" alt=""/>
							<span className={flag === 'complate' ? 'red process-tip' : 'process-tip'}>完成</span>
						</i>
					</div>
				</div>
			</div>
		)
	}
}

export default ProcessBar;