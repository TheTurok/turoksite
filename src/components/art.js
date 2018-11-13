import React, { Component } from 'react';


export default class Art extends Component {
  render() {
    return (
      <div className = "content text-center">
        <img src={require('../art/art1.jpg')} alt = "Art"/>
        <img src={require('../art/art2.jpg')} alt = "Art"/>
        <img src={require('../art/art3.jpg')} alt = "Art"/>
        <img src={require('../art/art4.jpg')} alt = "Art"/>
        <img src={require('../art/art5.jpg')} alt = "Art"/>
        <img src={require('../art/art6.jpg')} alt = "Art"/>
        <img src={require('../art/art7.jpg')} alt = "Art"/>
        <img src={require('../art/art8.jpg')} alt = "Art"/>
      </div>

    );
  }
}
