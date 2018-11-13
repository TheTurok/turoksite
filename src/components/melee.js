import React, { Component } from 'react';
import MeleeMarth from '../components/melee_marth';
import {Link} from 'react-router-dom';

export default class Melee extends Component {
  render() {
    return (
      <div className = "content text-center">
        <Link to = "/melee/marth" >
          <img src={require('../melee/marth_icon.png')} alt = "Icons"/>
        </Link>
        <Link to = "/melee/falcon" >
          <img src={require('../melee/falcon_icon.png')} alt = "Icons"/>
        </Link>
        <Link to = "/melee/falco" >
          <img src={require('../melee/falco_icon.png')} alt = "Icons"/>
        </Link>

        <h2>Choose Your Character</h2>

      </div>

    );
  }
}
