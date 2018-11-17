import React from 'react';

const EventListWidget = ({ events }) => (
  <div className="MessageList">
    <h2>Events</h2>
    <ul className="message">
      {events && events.map((event, index) => (
        <li key={index}>
          <p>{event.data.title}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default EventListWidget;