import React from 'react';
import config from '../config/feConfig';

class Footer extends React.Component {
	render = () => {
	    const copyright = "copyright@nzhg.co.nz All Rights Reserved by NZH Group";
		/*const {
			// name,
			// logo,
			copyright,
			// qrcode
		} = this.props.companyInfo;*/

		/*let menuList,
			menu = config.helpMenu;

		if (menu && menu.length) {
			menuList = menu.map((v, i) => {
				return (
					<div className="footer-b2-col" key={i}>
						<h3>{v.title}</h3>
						{
							v.subTitle && v.subTitle.length && config.companyName === 'NZH' ? (
								<ul>
									{
										v.subTitle.map((i) => {
											return (
												<li key={i.id}>
													<a href={'/help?id=' + i.id}>
														{i.name}
													</a>
												</li>
											)
										})
									}
								</ul>
							) : ''
						}
					</div>
				)
			})
		}*/

		return (
			<footer className="footer">
				{/*<div className="footer-center clear-float inner">
					<div className="footer-b1">
						<img src={logo}/>
					</div>
					<div className="footer-b2">
						{menuList}
						<div className="footer-b2-col">
							<h3>{name}</h3>
							<ul>
								<li>
									<a href="/help?id=11">关于{name}</a>
								</li>
								<li>
									<a href="/help?id=12">联系我们</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer-b3">
						<img src={qrcode}/>
						<p>扫码关注{name}公众号</p>
					</div>
				</div>*/}
				<div className="footer-bottom">
					<p>{copyright}</p>
				</div>
			</footer>
		)
	}
}

export default Footer;