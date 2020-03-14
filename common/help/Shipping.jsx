import React from 'react';

export default class Shipping extends React.Component {
	render = () => {
		return (
			<div className="about-section">
				<h2 className="help-s2-title">关于送货</h2>
				<div className="help-inner">
					<div className="help-sec">
						<h3>1. 富腾达</h3>
						<img src="/images/ftd.png"/>
						<p>全国</p>
						<p>保健品3周左右</p>
						<p>奶粉4-6周</p>
					</div>
					<div className="help-sec">
						<h3>2. 程光</h3>
						<img src="/images/cg.png"/>
						<p>全国</p>
						<p>保健品3周左右</p>
						<p>奶粉4-6周</p>
					</div>
					<hr style={{border: '3px double #343a5e'}}/>
					<div className="help-inner" style={{marginBottom: '20px'}}>
						<img className="ftd-pic" src="/images/ftd.jpg"/>
						<h2 className="help-s2-title2">富腾达特快保健品包裹明细公告 2017.10.25</h2>
						<p className="ta-center">富腾达特快保健品包裹明细公告</p>
						<p className="ta-center">-4.8 税改以后的包裹新政策跟新</p>
					</div>
					<div className="help-inner">
						<p>• 纯保健品及混包:总数量不超过 10 个。 洗护用品不超过 6 件。 化妆品一件。 总重量不超过 6KG。</p>
						<p>• 纯洗护用品:总数量不超过 6 件。</p>
						<p>• 纯化妆品:总数量不超过 2 件。礼盒包装 1 个。</p>
						<p>• (洗护用品和化妆品区分:牙膏，肥皂，洗发水，护发素，染发剂，洗面奶，卸妆水，护肤水，须后水，面膜，面霜，护手霜，精油，润唇膏，防蚊液，皮肤护理软膏，丰乳霜，纤体膏，除
							臭剂等属于洗护用品;香水，花露水，口红唇彩，指甲油，粉底，腮红，眼影，眼线笔，眉笔， 睫毛膏，消除皱纹和美化唇形的皮内注射美容产品等属于化妆品。)</p>
						<p>• 羊毛制品，被子鞋子(包含 UGG):每个包裹限 1 床/双，不可混寄。</p>
						<p>• 衣服及鞋类包裹:儿童衣服，手套围巾混装不超过 3 件。 纯儿童衣物不超过 5 件。成人款限2 件。鞋类成人款限 1 件(含 UGG，NIKE 等)婴幼儿数限 2 双。不得混寄。</p>
						<p>• 床上用品类:被子 垫子 枕头 羊毛制品 内限一件。</p>
						<p>• 肉蛋奶，种子植被花胶海参干货等产品不予邮寄，海关扣件一律不予理赔。</p>
						<p>• 特殊物品细分类别包裹要求:</p>
						<p>1. 电动剃须刀1件</p>
						<p>1. 电动牙刷2件</p>
						<p>1. 咖啡机1件</p>
						<p>1. 兔子毛绒玩具可以放6件（混合可以放3件）</p>
						<p>1. 潘多拉一件</p>
						<p>1. 牙膏麦片薯片米糊巧克力可以放15件</p>
						<p>1. 木瓜膏卫生间绵羊油可以放8件</p>
						<p>1. 洁面仪/瘦脸仪/补水仪每个包裹限放一件</p>
						<p>• 特殊物品以海关实际查验为准。额外关税需收件人自己承担。</p>
						<p className="help-underline help-p1">• 应海关总署要求，所有快递小包裹需填写品牌，以便申报。</p>
						<p className="ta-right" style={{marginTop: '20px'}}>新西兰富腾达</p>
						<p className="ta-right">25/10/2017</p>
					</div>
				</div>
			</div>
		)
	}
}