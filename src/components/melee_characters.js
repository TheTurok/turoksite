import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';

let file_count = 0;

export default class MeleeCharacters extends Component {
  onNextButton = () =>{
    this.props.match.params.id++;

    if(this.props.match.params.id === file_count+1)
      this.props.match.params.id = 1;

    this.props.history.push(`/melee/${this.props.match.params.character.toString()}/${this.props.match.params.id.toString()}`);
  }

  onPrevButton = () =>{
    this.props.match.params.id--;

    if(this.props.match.params.id === 0)
      this.props.match.params.id = file_count;

    this.props.history.push(`/melee/${this.props.match.params.character.toString()}/${this.props.match.params.id.toString()}`);
  }

  render() {
    let character = this.props.match.params.character.toString()
    switch(character){
      case 'falco':
        file_count = 6;
        break;
      case 'falcon':
        file_count = 3;
        break;
      default:
        file_count = 8;
    }

    return (
      <div className = "content text-center container-fluid row">
        <img src= {aLeft}
          onClick={this.onPrevButton}
          className="col-md-1 col-md-offset-1 img-responsive" alt = "arrowBtn"/>


        <img src={require(`../melee/${character}${this.props.match.params.id.toString()}.gif`)}
          className="col-md-8 img-responsive" alt = "Combo"/>


        <img src={aRight}
          onClick={this.onNextButton}
          className="col-md-1  img-responsive" alt = "arrowBtn"/>
      </div>

    );
  }
}
