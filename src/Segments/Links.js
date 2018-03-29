import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
        <div className="segment">
            <div className="link">
                <a href="https://www.mindseyesociety.org/" target="_blank">
                    The Mind's Eye Society
                </a>
            </div>
            <div className="link">
                <a href="https://games.mindseyesociety.org/vampire-the-masquerade/" target="_blank">
                    New Chronicle Information
                </a>
            </div>
            <div className="link">
                <a href="https://www.mindseyesociety.org/new-players/trial-membership/" target="_blank">
                    Membership
                </a>
            </div>
            <div className="link">
                <a href="https://www.mindseyesociety.org/national-officers/board-of-directors/club-policies/" target="_blank">
                    Code of Conduct
                </a>
            </div>
            <div className="link">
                <a href="https://docs.google.com/document/d/1F-T0BuZVkAUPUHOUU_-aIRrHhwUFoaddsRUzBK5ThYQ/edit" target="_blank">
                    Submitting Characters
                </a>
            </div>
            <div className="link">
                <a href="https://docs.google.com/document/d/1jHrvYzTxuGVwwch-jVBL2akfCtBHUswok8RWBLCXDPU/edit" target="_blank">
                    Submitting Approvals
                </a>
            </div>
        </div>      
    );
  }
}


export default Links;
