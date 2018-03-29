import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <div className="segment">
        <div className="copy">For any special events, other venue  games, or more details about our Monthly Game  please see our calendar below:</div>
        <div><iframe src="https://www.google.com/calendar/embed?deb=-&embed_style=WyJhdDplbWI6c3QiLCIjZTBlMGUwIiwiI2VkZWRlZCIsIiM0MTg0ZjMiLCJyb2JvdG8iLCIjNjM2MzYzIiw1MDAsIiNmZmYiXQo&mode=agenda&showCalendars=1&showPrint=0&showTz=0&src=h9otvquduqqe104lovodt69060@group.calendar.google.com" /></div>
      </div>      
    );
  }
}

export default Calendar;
