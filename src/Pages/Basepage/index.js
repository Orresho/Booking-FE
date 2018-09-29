import React, { Component } from 'react';
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { SignOut } from "../../Redux/Actions/user";
// All styles consumed by basepage
import './style.css';
import '../../Styles/buttons.css';
import '../../Styles/Inputs.css';

class BasePage extends Component {

	_handleSignOut = () => {
		this.props.removeUserSession()
	};

	render() {
		const { className, children, isAuthenticated } = this.props;

		// Content/data will be fetched and passed on to basapage components here
		//...

		return (
			<div className={`BasePage ${className && className}`}>
				<Header
					isAuthenticated={isAuthenticated}
					signOut={this._handleSignOut} />
				<div className="main-content-container">
					{children}
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	isAuthenticated: state.user.isAuthenticated
}),
	dispatch => ({
		removeUserSession: () => dispatch(SignOut()),
	}))(BasePage);