import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div className = "col-sm-12 col-md-8 col-md-offset-2 content">
        In Progress!!
        <h2>1. Emaily </h2>
        <br/>
          <p> A service that sends surveys to thousands of emails.

          <br/>
          <a target="_blank"  href="https://github.com/TheTurok/serverReact"> Emaily Github</a>

        </p>

        <h2>2. Speed </h2>
          <br/>
          <p> A card game simulation of speed.

          <img src={require('../projectPictures/speed.png')} className="img-responsive" alt = "Combo"/>

        </p>

        <h2>3. Weather Maps </h2>
          <br/>
          <p>

          <img src={require('../projectPictures/weathermap.png')} className="img-responsive" alt = "Combo"/>

        </p>


      </div>

    );
  }
}
