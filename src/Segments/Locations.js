import React, { Component } from 'react';
import './Locations.css';

class Locations extends Component {
  render() {
    return (
      <div className="segment">
        <div className="copy">We meet the Second Saturday of the Month at the below location.</div>
        <div className="copy">There is a $10 site fee to attend, with free parking if you drive</div>
        <div className="link">7:00 PM to 11:00 PM at&nbsp;
            <a href="https://www.google.com/maps/place/Bubbles+Academy/@41.9208992,-87.672111,15z/data=!4m5!3m4!1s0x0:0x96c10f7c8a22707e!8m2!3d41.9208992!4d-87.672111" target="_blank">
                Bubbles Academy, 2184 N Elston, Chicago, Illinois 60614
            </a>
        </div>
        <div><iframe src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=41.921002,-87.671979&output=embed&q=2184+N+Elston+Ave,+Chicago,+IL+60614,+United+States+%28Bubbles+Academy%29&z=16" /></div>
      </div>      
    );
  }
}

export default Locations;
