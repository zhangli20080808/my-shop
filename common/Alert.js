import React from 'react';

class Alert extends React.Component {

	render() {
		return (
			<div className="alert-section">
				<p>
					{this.props.msg}
				</p>
			</div>
		)
	}
}

export default Alert;