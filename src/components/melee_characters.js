import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';
import {Link} from 'react-router-dom';

let file_count;
let character;

export default class MeleeCharacters extends Component {
  componentWillMount() {
    character = this.props.match.params.character;
    switch(character){
      case 'falco':
        file_count = 6;
        break;
      case 'falcon':
        file_count = 3;
        break;
      case 'marth':
        file_count = 8;
      default:
        file_count = 1;
    }
    if(this.props.match.params.id == file_count+1)
      this.props.match.params.id = 1;
    if(this.props.match.params.id == 0)
      this.props.match.params.id = file_count;
  }

  render() {
    return (
      <div className = "content text-center container-fluid row">

        <Link to = {`/melee/${character}/${Number(this.props.match.params.id)-1}`} onClick={() => this.forceUpdate()} className="col-md-1 col-md-offset-1" >
          <img src= {aLeft} className="img-responsive" alt = "arrowBtn"/>
        </Link>

        <img src={require(`../melee/${character}${this.props.match.params.id}.gif`)}
          className="col-md-8 img-responsive" alt = "Combo"/>

        <Link to = {`/melee/${character}/${Number(this.props.match.params.id)+1}`} onClick={() => this.forceUpdate()} className="col-md-1" >
          <img src= {aRight} className="img-responsive" alt = "arrowBtn"/>
        </Link>
      </div>

    );
  }
}
