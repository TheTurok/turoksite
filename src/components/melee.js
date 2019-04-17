import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Melee extends Component {
  render() {
    return (
      <div className = "col-sm-12 col-md-8 col-md-offset-2 content text-center">
        <br/>

        <h4 id = "meleeD" >
          I am Turok. For Super Smash Bros. Melee, I used to be ranked top 20 in San Diego California.
          I have taken sets off Rock Leeland and Captain Faceroll.
          Enjoy (:
        </h4>

        <br/><br/>

        <Link to = "/melee/marth/1" >
          <img src={require('../melee/marth_icon.png')} alt = "Icons"/>
        </Link>
        <Link to = "/melee/falcon/1" >
          <img src={require('../melee/falcon_icon.png')} alt = "Icons"/>
        </Link>
        <Link to = "/melee/falco/1" >
          <img src={require('../melee/falco_icon.png')} alt = "Icons"/>
        </Link>


        <h2>Choose Your Character</h2>

      </div>

    );
  }
}
