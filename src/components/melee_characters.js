import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';
import {Link} from 'react-router-dom';

let file_count;

/*
console.log(character);
console.log(id);
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
if(id > file_count)
  id = 1;
if(id == 0)
  id = file_count;
*/

export default class MeleeCharacters extends Component {
  render() {
    let {
      character, id
    } = this.props.match.params;

    let num = Number(id);

    switch(character){
      case 'falco':
        file_count = 6;
        break;
      case 'falcon':
        file_count = 3;
        break;
      case 'marth':
        file_count = 8;
        break;
      default:
        file_count = 1;
    }
    if(num > file_count-1)
      num = 0;
    if(num < 0)
      num = file_count-1;

    return (
      <div className = "content text-center container-fluid row">

        <Link to = {`/melee/${character}/${num-1}`} className="col-md-1 col-md-offset-1" >
          <img src= {aLeft} className="img-responsive" alt = "arrowBtn"/>
        </Link>

        <img src={require(`../melee/${character}${num}.gif`)}
          className="col-md-8 img-responsive" alt = "Combo"/>

        <Link to = {`/melee/${character}/${num+1}`} className="col-md-1" >
          <img src= {aRight} className="img-responsive" alt = "arrowBtn"/>
        </Link>
      </div>

    );
  }
}
