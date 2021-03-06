import React, { Component } from 'react';
import Project from './Project'

const Projects = () => {
    return (
      <div className = "col-sm-12 col-md-8 col-md-offset-2 content">
        <br/>

          <Project title="Emaily" date="December 2018 - June 2019">
            A service that sends surveys to thousands of emails and collecting its answers.
            Used Google OAuth with Passport.js for user authentication.
            My website is able to accept credit card payments using store credits and send emails through SendGrid.

            <img src={require('../projectPictures/emailyPP.png')} className="img-responsive " alt = "projectPictures"/>
            <img src={require('../projectPictures/emaily2.png')} className="img-responsive " alt = "projectPictures"/>
            <img src={require('../projectPictures/emaily3.png')} className="img-responsive " alt = "projectPictures"/>

            <br/>

            <a target="_blank"  href="https://github.com/TheTurok/serverReact"> Github</a>
            <a target="_blank"  href="https://warm-beach-63879.herokuapp.com/surveys">  Heroku</a>
          </Project>

          <Project title="Weather Maps" date="September 2018">

            Built a website to compare multiple cities’ weather, climate, and pressure simultaneously with SparkLine graphs
            Used OpenWeatherMap API to retreive weather data and Google Maps API for the citie's maps.

            <img src={require('../projectPictures/weatherPP.png')} className="img-responsive" alt = "projectPictures"/>

            <br/>

            <a target="_blank"  href="https://github.com/TheTurok/WeatherForecastApplication"> Weather Maps Github</a>
          </Project>

          <Project title="GarPr" date="Setember 2014">
            GAR PR is a ranking system and tournament results archive for Super Smash Brothers Melee tournaments created by gaR, a player currently living in the Norcal area. It is intended to be used by local and regional Smash communities to provide a point-based ranking for all players in the region. Most regional power rankings have historically been decided by a panel of players and only include a small subset of the player base (top 10, top 20, etc.). They are also updated fairly infrequently (a couple of times a year). GAR PR intends to provide a very frequently updated and objective ranking that allows all players to see how they stack up against the rest of their region, no matter what their skill level is.

            <br/><br/>
              Made with Android Application to aesthectically display results on a mobile phone.
            <br/>


            <img src={require('../projectPictures/garprgif.gif')} className="img-responsive" style ={{padding: '5px', width: '43%', height: '43%'}} alt = ""/>
            <img src={require('../projectPictures/garpr2.png')} className="img-responsive" alt = ""/>

            <br/>

            <a target="_blank"  href="https://github.com/TheTurok/smash-ranks-android"> GarPr Github</a>
            <a target="_blank"  href="https://play.google.com/store/apps/details?id=com.garpr.android&hl=en_US"> GarPr PlayStore</a>
          </Project>

          <Project title="Speed" date="June 2018">
              A card game simulation of speed built on Unity. Player versus Player.

              <img src={require('../projectPictures/speedPP.png')} className="img-responsive" alt = "projectPictures"/>

              <br/>

              <a target="_blank"  href="https://github.com/TheTurok/SpeedTech"> Speed Github</a>
          </Project>

      </div>

    );
}

export default Projects;
