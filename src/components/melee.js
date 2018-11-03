import React, { Component } from 'react';


export default class Melee extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../melee_gifs/1.gif')} alt = "Combo"/>
        <img src={require('../melee_gifs/2.gif')} alt = "Combo"/>
        <img src={require('../melee_gifs/3.gif')} alt = "Combo"/>
        <img src={require('../melee_gifs/4.gif')} alt = "Combo"/>
        <img src={require('../melee_gifs/5.gif')} alt = "Combo"/>
        <img src={require('../melee_gifs/6.gif')} alt = "Combo"/>
        <img src={require('../melee_gifs/7.gif')} alt = "Combo"/>
      </div>

    );
  }
}
