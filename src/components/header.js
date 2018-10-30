import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1> Timothy Choi </h1>
        <div class = "row">
          <div class = "text-center" >
            <Link to = "/" > Home </Link>
            <Link to = "/art" > Art </Link>
            <Link to = "/contact" > Contact </Link>
            <Link to = "/resume" > Resume </Link>
          </div>
        </div>
      </div>

    );
  }
}
