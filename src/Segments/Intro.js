import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="segment">
        <div className="title">Second City Sins</div>
        <div className="copy">Welcome!</div>
        <div className="copy">If you're an avid roleplayer seeking a LARP to call your home game, look no further!</div>
        <div className="copy">If you've wanted to try a LARP but were never quite sure where to begin, rest assured that this is the perfect time to dive in!</div>
        <div className="copy">Second City Sins is a domain of the Mind's Eye Society (MES), a gaming community that offers games all over the world.</div>
      </div>      
    );
  }
}

export default Intro;
