import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css';

export default class Footer extends Component {

  const API_KEY = 'MNv5cGDRm95PP7Bg7iL7pRmd24ZqAPD6';
  render() {
    return (
      <div id = "foot" className = "col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2">
        <br/> <br/>

        Powered by React.js and Node.js
        <br/>
        <Link to = "https://github.com/TheTurok/turoksite" target = "_blank" > Github: Website Code </Link>
      </div>

    );
  }
}
