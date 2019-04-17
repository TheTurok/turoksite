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
            <Link to = "/" className = "mlink " > Home </Link>
            <Link to = "/projects" className = "mlink "> Projects </Link>
          <Link to = "/art" className = "mlink "> Art </Link>
          <Link to = "/melee" className = "mlink"> Melee </Link>
            <Link to = "/resume" className = "mlink "> Resume </Link>
          </div>
        </div>
      </div>

    );
  }
}
