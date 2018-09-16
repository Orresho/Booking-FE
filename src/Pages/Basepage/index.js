import React, { Component } from 'react';
import Header from "../../Components/Header";

import './style.css';

class BasePage extends Component {
	render() {
		const { className, children } = this.props;

		// Content/data will be fetched and passed on to basapage components here
		//...

		return (
			<div className={`BasePage ${className && className}`}>
				<Header />
				<div className="main-content-container">
					{children}
				</div>
			</div>
		);
	}
}

export default BasePage;