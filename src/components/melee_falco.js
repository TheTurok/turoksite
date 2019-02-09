import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';


export default class MeleeFalco extends Component {
  onNextButton(){
    this.props.match.params.id++;

    if(this.props.match.params.id === 2)
      this.props.match.params.id = 1;

    this.props.history.push(`/melee/falco/${this.props.match.params.id}`);
  }

  onPrevButton(){
    this.props.match.params.id--;

    if(this.props.match.params.id === 0)
      this.props.match.params.id = 1;

    this.props.history.push(`/melee/falco/${this.props.match.params.id}`);
  }

  render() {


    return (
      <div className = "content text-center">
        <img src= {aLeft}
          onClick={this.onPrevButton.bind(this)}
          className="img-responsive" alt = "arrowBtn"/>


        <img src={require(`../melee/b${this.props.match.params.id}.gif`)}
          className="img-responsive" alt = "Combo"/>


        <img src={aRight}
          onClick={this.onNextButton.bind(this)}
          className="img-responsive" alt = "arrowBtn"/>
      </div>

    );
  }
}
