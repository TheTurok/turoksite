import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css';

export default class Footer extends Component {
  render() {
    return (
      <div id = "foot" className = "col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2">
        <br/> <br/>

        Used React.js and Node.js for this website
        <br/>
        <Link to = "https://github.com/TheTurok/turoksite" target = "_blank" > Github: Website Code </Link>
      </div>

    );
  }
}
