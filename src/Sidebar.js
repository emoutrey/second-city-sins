import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import MenuHeader from './Images/MenuHeader.png'

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div className="sidebar">
        <Link to={'Home'}>
          <img src={MenuHeader}/>
        </Link>
      </div>
    );
  }
};

export default Sidebar;
