import React, { Component } from 'react';


export default class MeleeFalcon extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../melee/f1.gif')} alt = "Combo"/>
        <img src={require('../melee/f2.gif')} alt = "Combo"/>
        <img src={require('../melee/f3.gif')} alt = "Combo"/>
      </div>

    );
  }
}
