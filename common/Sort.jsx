import React from 'react';
import config from '../config/feConfig';

const companyName = config.companyName;
const l2Warehouse = config.l2Warehouse;

class Sort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			priceRule: true,
			select: 'default',
			defaultSelect: 'category-cur',
		}
	}

	/**
	 * 排序
	 */
	order = (flag) => {
		const {priceRule} = this.state;
		switch (flag) {
			case 'default':
				this.setState({
					select: 'default',
				}, () => {
					this.props.getCurrentPageProduct({
						orderField: '',
						orderRule: '',
						pageNumber: 1
					})
				});
				break;
			case 'price':
				if (priceRule) {
					this.setState({
						priceIcon: '/images/price-bottom.png'
					})
				} else {
					this.setState({
						priceIcon: '/images/price-top.png'
					})
				}
				this.setState({
					priceRule: !priceRule,
					timeIcon: '',
					select: 'price'
				}, () => {
					this.props.getCurrentPageProduct({
						orderField: 'price',
						orderRule: priceRule ? 'desc' : 'asc',
						pageNumber: 1
					})
				});
				break;
			case 'sale':
				this.setState({
					priceIcon: '',
					saleIcon: '/images/time-bottom.png',
					select: 'sale',
					timeIcon: ''
				}, () => {
					this.props.getCurrentPageProduct({
						pageNumber: 1,
						orderField: 'sales',
						orderRule: 'DESC',
					});
				});
				break;
			case 'time':
				this.setState({
					priceIcon: '',
					saleIcon: '',
					timeIcon: '/images/time-bottom.png',
					select: 'time'
				}, () => {
					this.props.getCurrentPageProduct({
						pageNumber: 1,
						orderField: 'createTime',
						orderRule: 'desc',
					});
				});
				break;
		}
	};

	render = () => {
		const {
				select,
				priceIcon
			} = this.state,
			{
				userInfo
			} = this.props;
		return (
			<div className="sub-top clear-float">
				<div className="filter clear-float">
					<a
						className={select === 'default' ? 'category-cur' : ''}
						href="javascript:void(0)"
						onClick={this.order.bind(this, 'default')}>
						综合
					</a>
					{userInfo || !userInfo && companyName === l2Warehouse ?
						<a
							className={select === 'price' ? 'category-cur' : ''}
							href="javascript:void(0)"
							onClick={this.order.bind(this, 'price')}>
							价格
							<span className="price-icon">
                <img src={priceIcon ? priceIcon : '/images/price-default.png'}/>
              </span>
						</a>
						: ''
					}
					<a
						className={select === 'sale' ? 'category-cur' : ''}
						href="javascript:void(0)"
						onClick={this.order.bind(this, 'sale')}>
						销量
						{/*<span className="np-right">
              <img className="time-icon" src={saleIcon ? saleIcon : '/images/time-default.png'}/> 
            </span>*/}
					</a>
					<a
						className={select === 'time' ? 'category-cur' : ''}
						href="javascript:void(0)"
						onClick={this.order.bind(this, 'time')}>
						新品上架
						{/* <span className="np-right">
              <img className="time-icon" src={timeIcon ? timeIcon : '/images/time-default.png'}/> 
            </span>*/}
					</a>
				</div>
			</div>
		)
	}
}

export default Sort;