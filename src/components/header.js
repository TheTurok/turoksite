import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';
import '../styles/style.css';

export default class Header extends Component {
  render() {
    return (
      <div id = "head" className = "container-fluid center">

      <div className = "row-fluid">
          <div className = "links row"  >
            <Link to = "/" className = "mlink col-md-3"> Home </Link>
            <Link to = "/projects" className = "mlink col-md-2"> Projects </Link>
          <Link to = "/art" className = "mlink col-md-2"> Art </Link>
          <Link to = "/melee" className = "mlink col-md-2"> Melee </Link>
            <Link to = "/resume" className = "mlink col-md-3"> Resume </Link>
          </div>
        </div>
      </div>

    );
  }
}
