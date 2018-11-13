import React, { Component } from 'react';


export default class MeleeMarth extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../melee/m1.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/m2.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/m3.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/m4.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/m5.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/m6.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/m7.gif')} className="img-responsive" alt = "Combo"/>
      </div>

    );
  }
}
