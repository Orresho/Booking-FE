import React, { Component } from 'react';

import './style.css';

class BasePage extends Component {
	render() {
		const { className, children } = this.props;

		// Content/data will be fetched and passed on to basapage components here
		//...

		return (
			<div className={`BasePage ${className && className}`}>
				<div>
				</div>
				{children}
				<div>
				</div>
			</div>
		);
	}
}

export default BasePage;