import React from 'react';

class BackTop extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			flag: false
		}
	}

	componentDidMount() {
		const $window = $(window),
			$document = $(document),
			_this = this;

		$window.scroll(function () {
			if ($document.scrollTop() >= 160) {
				_this.setState({
					flag: true
				})
			} else {
				_this.setState({
					flag: false
				})
			}
		})
	}

	handdleTop = () => {
		$('html,body').animate({scrollTop: 0}, 1000)
	};

	render = () => (
		<div className="back-section" onClick={this.handdleTop}>
			{this.state.flag ? <img src="/images/top-icon.png"/> : ''}
		</div>
	)
}

export default BackTop;