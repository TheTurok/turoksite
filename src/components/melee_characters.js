import React, { Component } from 'react';
import aLeft from '../melee/aLeft.png';
import aRight from '../melee/aRight.png';
import {Link} from 'react-router-dom';

export default class MeleeCharacters extends Component {
  constructor(props){
    super(props);

    let {
      character, id
    } = this.props.match.params;

    this.state = {
      file_count: null,
      id: Number(id),
      character: character
    }
  }

  componentWillMount(){
    switch(this.state.character){
      case 'falco':
        this.setState({file_count:6});
        break;
      case 'falcon':
        this.setState({file_count:3});
        break;
      case 'marth':
        this.setState({file_count:8});
        break;
      default:
        this.setState({file_count:2});
    }
  }

  retrieveGIF(c, i){
    let num = i;
    if (num > this.state.file_count -1){
      this.setState({id:0});
      num = 0;
    }
    if (num < 0){
      this.setState({id:this.state.file_count - 1});
      num = this.state.file_count - 1;
    }

    return(
      <img src={require(`../melee/${c}${num}.gif`)}
        className="col-md-8 img-responsive" alt = "Combo"/>
    );
  }


  render() {
    return (
      <div className = "content text-center container-fluid row">

        <Link to = {`/melee/${this.state.character}/${this.state.id-1}`} onClick={() => this.setState({id:this.state.id - 1})} className="col-md-1 col-md-offset-1" >
          <img src= {aLeft} className="img-responsive" alt = "arrowBtn"/>
        </Link>

        {this.retrieveGIF(this.state.character, this.state.id)}

        <Link to = {`/melee/${this.state.character}/${this.state.id+1}`} onClick={() => this.setState({id:this.state.id + 1})} className="col-md-1" >
          <img src= {aRight} className="img-responsive" alt = "arrowBtn"/>
        </Link>
      </div>

    );
  }
}
