import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <div class = "container">
        <img id = "pic" className = "img-circle img-esponsive" src={require('../files/profile.jpg')} />
        <h1> Timothy Choi </h1>
        <div class = "row-fluid">
          <div >
            <Link to = "/" className = "col-md-2 col-md-offset-1"> Home </Link>
            <Link to = "/art" className = "col-md-2 col-md-offset-1"> Art </Link>
            <Link to = "/contact" className = "col-md-2 col-md-offset-1"> Contact </Link>
            <Link to = "/resume" className = "col-md-2 col-md-offset-1"> Resume </Link>
          </div>
        </div>
      </div>

    );
  }
}
