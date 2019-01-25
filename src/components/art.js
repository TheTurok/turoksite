import React, { Component } from 'react';


export default class Art extends Component {
  render() {
    return (
      <div className = "content text-center">
        <h4> Time to Go </h4>
          <img src={require('../art/art4.jpg')} className="img-responsive" alt = "Art"/>
          <br/>  <br/>
        <h4> Yoyo Brothers</h4>
          <img src={require('../art/art1.jpg')} className="img-responsive" alt = "Art"/>
          <br/>  <br/>
        <h4> Sf Giants </h4>
          <img src={require('../art/art2.jpg')} className="img-responsive" alt = "Art"/>
          <br/> <br/>
        <h4> Sun And Moon </h4>
          <img src={require('../art/art3.jpg')} className="img-responsive" alt = "Art"/>
          <br/>   <br/>
        <h4> Panda Skull</h4>
          <img src={require('../art/art5.jpg')} className="img-responsive" alt = "Art"/>
          <br/>  <br/>
        <h4>Flat Time & Still Space </h4>
          <img src={require('../art/art6.jpg')} className="img-responsive" alt = "Art"/>
          <br/>  <br/>
        <h4>Biking Right </h4>
          <img src={require('../art/art7.jpg')} className="img-responsive" alt = "Art"/>
          <br/>  <br/>
        <h4> Sculpture </h4>
          <img src={require('../art/art8.jpg')} className="img-responsive" alt = "Art"/>

      </div>

    );
  }
}
