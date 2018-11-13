import React, { Component } from 'react';


export default class MeleeMarth extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../melee/m1.gif')} alt = "Combo"/>
        <img src={require('../melee/m2.gif')} alt = "Combo"/>
        <img src={require('../melee/m3.gif')} alt = "Combo"/>
        <img src={require('../melee/m4.gif')} alt = "Combo"/>
        <img src={require('../melee/m5.gif')} alt = "Combo"/>
        <img src={require('../melee/m6.gif')} alt = "Combo"/>
        <img src={require('../melee/m7.gif')} alt = "Combo"/>
      </div>

    );
  }
}
