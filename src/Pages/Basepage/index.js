import React, { Component } from 'react';
import Header from "../../Components/Header";

// All styles consumed by basepage
import './style.css';
import '../../Styles/buttons.css';
import '../../Styles/Inputs.css';

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