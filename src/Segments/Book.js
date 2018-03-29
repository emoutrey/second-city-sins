import React, { Component } from 'react';
import './Book.css';
import BookCover from '../Images/bookcover.jpg'

class Book extends Component {
  render() {
    return (
      <div className="segment">
        <div className="book">
            <a href="http://www.drivethrurpg.com/product/123666/Minds-Eye-Theatre-Vampire-The-Masquerade" target="_blank">
                <img src={BookCover}/>
            </a>
        </div>
      </div>
    );
  }
}

export default Book;
