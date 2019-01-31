import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Link} from 'react-router-dom';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';

export default class MeleeFalcon extends Component {
  onNextButton(){
    this.props.match.params.id++;

    if(this.props.match.params.id === 4)
      this.props.match.params.id = 1;

    this.props.history.push(`/melee/falcon/${this.props.match.params.id}`);
  }

  onPrevButton(){
    this.props.match.params.id--;

    if(this.props.match.params.id === 0)
      this.props.match.params.id = 3;

    this.props.history.push(`/melee/falcon/${this.props.match.params.id}`);
  }

  render() {


    return (
      <div className = "content text-center">
        <img src= {aLeft}
          onClick={this.onPrevButton.bind(this)}
          className="img-responsive" alt = "arrowBtn"/>


        <img src={require(`../melee/f${this.props.match.params.id}.gif`)}
          className="img-responsive" alt = "Combo"/>


        <img src={aRight}
          onClick={this.onNextButton.bind(this)}
          className="img-responsive" alt = "arrowBtn"/>
      </div>

    );
  }
}
