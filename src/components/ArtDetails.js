import React, { Component } from 'react'

const ArtDetails = props => {
  return(
    <div>
      <h4> {props.title} </h4>
      <img src={props.art} className="img-responsive" alt = "Art"/>
      <br/>  <br/>
    </div>
  );
}

export default ArtDetails;
