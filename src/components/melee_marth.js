import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';

const FILE_COUNT = 8;

export default class MeleeMarth extends Component {
  onNextButton = () =>{
    this.props.match.params.id++;

    if(this.props.match.params.id === FILE_COUNT+1)
      this.props.match.params.id = 1;

    this.props.history.push(`/melee/marth/${this.props.match.params.id}`);
  }

  onPrevButton = () => {
    this.props.match.params.id--;

    if(this.props.match.params.id === 0)
      this.props.match.params.id = FILE_COUNT;

    this.props.history.push(`/melee/marth/${this.props.match.params.id}`);
  }

  render() {


    return (
      <div className = "content text-center">
        <img src= {aLeft}
          onClick={this.onPrevButton}
          className="img-responsive" alt = "arrowBtn"/>


        <img src={require(`../melee/m${this.props.match.params.id}.gif`)}
          className="img-responsive" alt = "Combo"/>


        <img src={aRight}
          onClick={this.onNextButton}
          className="img-responsive" alt = "arrowBtn"/>
      </div>

    );
  }
}
