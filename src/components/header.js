import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';
import '../styles/style.css';

export default class Header extends Component {
  render() {
    return (
      <div id = "head" class = "container">
        <img id = "pic" alt  = "profile" className = "img-circle img-responsive" src={require('../files/profile2.jpg')} />
        <h1> Timothy Choi </h1>
        <div class = "row-fluid">
          <div class = "links"  >
            <Link to = "/" className = "col-md-2 col-md-offset-1"> Home </Link>
            <Link to = "/art" className = "col-md-2"> Art </Link>
            <Link to = "/melee" className = "col-md-2"> Melee </Link>
            <Link to = "/contact" className = "col-md-2 "> Contact </Link>
            <Link to = "/resume" className = "col-md-2"> Resume </Link>
          </div>
        </div>
      </div>

    );
  }
}
