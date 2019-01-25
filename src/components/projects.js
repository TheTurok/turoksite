import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div className = "col-sm-12 col-md-8 col-md-offset-2 content">
        In Progress!!
        <br/>
        <div className = "projectHeader"> <h2 style={{float: 'left'}}>1. Emaily </h2> <h5 style={{float: 'right'}}>  December 2019 - Current </h5></div>
          <br/>
          <hr/>
          <p> Currently Developing a service that sends surveys to thousands of emails. Used Google OAuth with Passport.js for user authentication.
            My website is able to accept credit card payements using store credits with SendGrid.

              <img src={require('../projectPictures/emaily1.png')} className="img-responsive " alt = "Combo"/>
            <br/>
              <a target="_blank"  href="https://github.com/TheTurok/serverReact"> Emaily Github</a>

          </p>

        <div className = "projectHeader"> <h2 style={{float: 'left'}}>2. Speed </h2> <h5 style={{float: 'right'}}>  June 2018 </h5></div>
          <br/>
          <hr/>
          <p> A card game simulation of speed built on Unity. Player versus Player.

            <img src={require('../projectPictures/speed.png')} className="img-responsive" alt = "Combo"/>
          <br/>
            <a target="_blank"  href="https://github.com/TheTurok/SpeedTech"> Speed Github</a>
          </p>

          <div className = "projectHeader"> <h2 style={{float: 'left'}}>3. Weather Maps </h2> <h5 style={{float: 'right'}}>  Setember 2018 </h5></div>
            <br/>
            <hr/>
          <p>
            Visualizations for graphs and maps comparing different cities weather/climate/pressure.
            Used OpenWeatherMap API to retreive weather data and Google Maps API for the citie's maps.

            <img src={require('../projectPictures/weathermap.png')} className="img-responsive" alt = "Combo"/>
          <br/>
            <a target="_blank"  href="https://github.com/TheTurok/WeatherForecastApplication"> Weather Maps Github</a>

          </p>

          <div className = "projectHeader"> <h2 style={{float: 'left'}}>4. GarPr </h2> <h5 style={{float: 'right'}}>  Setember 2014 </h5></div>
            <br/>
            <hr/>
          <br/>
          <p>
            GAR PR is a ranking system and tournament results archive for Super Smash Brothers Melee tournaments created by gaR, a player currently living in the Norcal area. It is intended to be used by local and regional Smash communities to provide a point-based ranking for all players in the region. Most regional power rankings have historically been decided by a panel of players and only include a small subset of the player base (top 10, top 20, etc.). They are also updated fairly infrequently (a couple of times a year). GAR PR intends to provide a very frequently updated and objective ranking that allows all players to see how they stack up against the rest of their region, no matter what their skill level is.
          <br/><br/>
            Made with Android Application to aesthectically display results on a mobile phone.
          <br/>

            <img src={require('../projectPictures/garpr1.png')} className="img-responsive" style ={{padding: '5px'}} alt = ""/>
            <img src={require('../projectPictures/garpr2.png')} className="img-responsive" alt = ""/>

          <br/>
            <a target="_blank"  href="https://github.com/TheTurok/smash-ranks-android"> GarPr Github</a>
            <a target="_blank"  href="https://play.google.com/store/apps/details?id=com.garpr.android&hl=en_US"> GarPr PlayStore</a>
          </p>


      </div>

    );
  }
}
