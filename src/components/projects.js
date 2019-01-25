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
          <br/>
            <a target="_blank"  href="https://github.com/TheTurok/SpeedTech"> Speed Github</a>
          </p>

        <h2>3. Weather Maps </h2>
          <br/>
          <p>

            <img src={require('../projectPictures/weathermap.png')} className="img-responsive" alt = "Combo"/>
          <br/>
            <a target="_blank"  href="https://github.com/TheTurok/WeatherForecastApplication"> Weather Maps Github</a>

          </p>

        <h2>4. GarPr </h2>
          <br/>
          <p>
            GAR PR is a ranking system and tournament results archive for Super Smash Brothers Melee tournaments created by gaR, a player currently living in the Norcal area. It is intended to be used by local and regional Smash communities to provide a point-based ranking for all players in the region. Most regional power rankings have historically been decided by a panel of players and only include a small subset of the player base (top 10, top 20, etc.). They are also updated fairly infrequently (a couple of times a year). GAR PR intends to provide a very frequently updated and objective ranking that allows all players to see how they stack up against the rest of their region, no matter what their skill level is.

          <br/>

            <img src={require('../projectPictures/garpr1.png')} className="img-responsive" style ={{padding: '5px'}} alt = ""/>
            <img src={require('../projectPictures/garpr2.png')} className="img-responsive" alt = ""/>

          <br/>
            <a target="_blank"  href="https://github.com/TheTurok/smash-ranks-android"> GarPr Github</a>

          </p>


      </div>

    );
  }
}
