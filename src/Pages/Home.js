import React, { Component } from 'react';
import './Page.css';

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="map">
          <iframe src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=41.921002,-87.671979&output=embed&q=2184+N+Elston+Ave,+Chicago,+IL+60614,+United+States+%28Bubbles+Academy%29&z=16" />
          <iframe src="https://www.google.com/calendar/embed?deb=-&embed_style=WyJhdDplbWI6c3QiLCIjZTBlMGUwIiwiI2VkZWRlZCIsIiM0MTg0ZjMiLCJyb2JvdG8iLCIjNjM2MzYzIiw1MDAsIiNmZmYiXQo&mode=agenda&showCalendars=1&showPrint=0&showTz=0&src=h9otvquduqqe104lovodt69060@group.calendar.google.com" />
        </div>
      </div>
    );
  }
}

export default Home;
