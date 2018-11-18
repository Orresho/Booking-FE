import React, { Component } from 'react';
import Header from "../../Components/Header";
import { connect } from "react-redux";
import { SignOut } from "../../Redux/Actions/user";
import MobileHeader from "../../Components/MobileHeader";

// All styles consumed by basepage
import '../../Styles/base.css'
import './style.css';
import '../../Styles/buttons.css';
import '../../Styles/Inputs.css';

class BasePage extends Component {

	_handleSignOut = () => {
		this.props.removeUserSession()
	};

	_handleOpenDrawer = () => {
		console.log("drawer opened")
	}

	render() {
		const { className, children, isAuthenticated } = this.props;

		// Content/data will be fetched and passed on to basapage components here
		//...

		return (
			<div className={`BasePage ${className ? className : ''}`}>
				<MobileHeader 
					isAuthenticated={isAuthenticated}
					signOut={this._handleSignOut}
					openDrawer={this._handleOpenDrawer} />
				<Header
					isAuthenticated={isAuthenticated}
					signOut={this._handleSignOut} />

				<div className="divider" />

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