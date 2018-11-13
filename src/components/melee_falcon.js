import React, { Component } from 'react';


export default class MeleeFalcon extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../melee/f1.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/f2.gif')} className="img-responsive" alt = "Combo"/>
        <img src={require('../melee/f3.gif')} className="img-responsive" alt = "Combo"/>
      </div>

    );
  }
}
