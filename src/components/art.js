import React, { Component } from 'react';


export default class Art extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../art/art1.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art2.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art3.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art4.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art5.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art6.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art7.jpg')} className="img-responsive" alt = "Art"/>
        <img src={require('../art/art8.jpg')} className="img-responsive" alt = "Art"/>
      </div>

    );
  }
}
