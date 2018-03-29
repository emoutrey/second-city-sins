import React, { Component } from 'react';
import './Groups.css';

class Groups extends Component {
  render() {
    return (
        <div className="segment">
            <div className="copy">Join our out-of-character and in-character Google Groups below!</div>
            <div className="iframe-container">
                {/* Pending embed links from manager */}
                <iframe src="https://groups.google.com/forum/embed/?authuser=0&amp;parenturl=https://groups.google.com#!forum/SCS-Masq-OOC/join" />
                <iframe src="https://groups.google.com/forum/embed/?authuser=0&amp;parenturl=https://groups.google.com#!forum/SCS-Masqerade/join" />
            </div>
        </div>
    );
  }
}


export default Groups;
