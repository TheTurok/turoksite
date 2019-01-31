import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';
import '../styles/style.css';

export default class Header extends Component {
  render() {
    return (
      <div id = "head" className = "container center">
        <img id = "pic" alt  = "profile" className = "img-circle img-responsive" src={require('../files/profile2.jpg')} />
        <h1> Timothy Choi </h1>
        <div className = "row-fluid">
          <div className = "links"  >
            <Link to = "/" className = "col-md-3"> Home </Link>
            <Link to = "/projects" className = "col-md-2"> Projects </Link>
            <Link to = "/art" className = "col-md-2"> Art </Link>
            <Link to = "/melee" className = "col-md-2"> Melee </Link>
            <Link to = "/resume" className = "col-md-2 "> Resume </Link>
          </div>
        </div>
      </div>

    );
  }
}
