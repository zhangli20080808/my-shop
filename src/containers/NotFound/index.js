import React, { Component } from 'react';

class NotFound extends Component {

	UNSAFE_componentWillMount() {
		const { staticContext } = this.props;
		staticContext && (staticContext.NOT_FOUND = true);
	}

	render() {
		return <div>404, sorry, page not found</div>
	}

}

export default NotFound;
