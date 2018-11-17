import React, { Component } from 'react';
import BasePage from '../Basepage';
import CreateEventWidget from '../../Components/CreateEventWidget';
import EventListWidget from "../../Components/EventListWidget";
import { connect } from "react-redux";
// Firebase actions
import { createEvent, fetchNewEvents } from "../../firebase/event";

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
    fetchNewEvents().limitToLast(10).on('child_added', snapshot => {
      let eventData = { data: snapshot.val(), id: snapshot.key };
      this.setState(prevState => ({
        /* Concat array of new data with old */
        events: [eventData, ...prevState.events],
      }));
    });
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

    /* Crete new event by posting to firebase DB */
    createEvent(eventData)
      .then(() => {
        console.log('Event created successfully')
      })
      .catch(() => console.log('An error occured'))

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
