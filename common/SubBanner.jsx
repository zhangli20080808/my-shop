import React from 'react';

class SubBanner extends React.Component {

	render = () => {

		const {
			name,
			intro,
			backImg
		} = this.props.info;

		return (
			<div className="sub-banner-section">
				<div className="category-banner" style={{backgroundImage: 'url(' + backImg + ')'}}>
					<div className="category-banner-desc">
						<div>
							<h3>{name}</h3>
							<p>{intro}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SubBanner;