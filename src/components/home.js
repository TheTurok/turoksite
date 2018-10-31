import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div className = "col-sm-12 col-md-8 col-md-offset-2">
        <p>
          I graduated from Univeristy of California, San Deigo 2017 with a B.S. Computer Science.
          My focus is on web development. I usually make applictions in Javascript using React,
          and I'm well versed in Java and C++.
          <br/> <br/>
          Used React.js and Node.js for this website
          <br/>
          <Link to = "https://github.com/TheTurok/turoksite" > Website Code </Link>
          <br/><br/>
          My hobbies include Competititve Gaming: Super Smash Bros. Melee, Karaoke,
          Visual Art, Dancing, and many more!
        </p>
      </div>
    );
  }
}
