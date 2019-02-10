import React, { Component } from 'react';
import BasePage from '../Basepage';
import CreateEventWidget from '../../Components/CreateEventWidget';
import EventListWidget from "../../Components/EventListWidget";
import { connect } from "react-redux";

class EventContainer extends Component {

  initialState = {
    createdBy: this.props.userId,
    title: '',
    description: '',
    imageUrl: '',
  }
  constructor(props) {
    super(props);

    this.state = {
      ...this.initialState,
      events: [],
    }
  }

  componentDidMount() {
    
  }

  _handleSubmitEventCreation = (e) => {
    e.preventDefault();
    const {
      createdBy,
      title,
      description,
    } = this.state;

    const eventData = {
      createdBy,
      title,
      description
    }

  }

  _handleOnChange = (e, propName) => {
    const value = e.target.value;
    this.setState({ [propName]: value });
  }
  render() {
    return (
      <BasePage>
        <CreateEventWidget
          onChange={this._handleOnChange}
          onSubmit={this._handleSubmitEventCreation}
        />
        <EventListWidget events={this.state.events} />
      </BasePage>
    );
  }
}

export default connect(
  state => ({
    isAuthenticated: state.user.isAuthenticated,
    userId: state.user.sessionId,
  })
)(EventContainer);
