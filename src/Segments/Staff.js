import React, { Component } from 'react';
import './Staff.css';

class Staff extends Component {
  render() {
    return (
      <div className="segment">
        <div className="copy">Domain Coordinator: <a href="mailto:chicago.mes.dc@gmail.com">Steven Atchley</a></div>
        <div className="copy">Venue Storyteller: <a href="mailto:chicago.mes.masq@gmail.com">Felix Zhang</a></div>
        <div className="copy">Domain Storyteller: <a href="mailto:chicago.mes.DST@gmail.com">James King</a></div>
        <div className="copy">Regional Storyteller: <a href="mailto:rst@gl.mindseyesociety.org">Paul Marchant</a></div>
      </div>      
    );
  }
}

export default Staff;
