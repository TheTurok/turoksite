import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';

const FILE_COUNT = 6;

export default class MeleeFalco extends Component {
  onNextButton = () =>{
    this.props.match.params.id++;

    if(this.props.match.params.id === FILE_COUNT+1)
      this.props.match.params.id = 1;

    this.props.history.push(`/melee/falco/${this.props.match.params.id.toString()}`);
  }

  onPrevButton = () =>{
    this.props.match.params.id--;

    if(this.props.match.params.id === 0)
      this.props.match.params.id = FILE_COUNT;

    this.props.history.push(`/melee/falco/${this.props.match.params.id.toString()}`);
  }

  render() {


    return (
      <div className = "content text-center container-fluid row">
        <img src= {aLeft}
          onClick={this.onPrevButton}
          className="col-md-1 col-md-offset-1 img-responsive" alt = "arrowBtn"/>


        <img src={require(`../melee/b${this.props.match.params.id}.gif`)}
          className="col-md-8 img-responsive" alt = "Combo"/>


        <img src={aRight}
          onClick={this.onNextButton}
          className="col-md-1  img-responsive" alt = "arrowBtn"/>
      </div>

    );
  }
}
