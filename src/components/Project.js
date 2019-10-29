import React from 'react';

const Project = props => {
  return(
    <div>
      <div className = "projectHeader"> <h2 style={{float: 'left'}}>{props.title} </h2> <h5 style={{float: 'right'}}>  {props.date} </h5></div>
      <br/>
      <hr/>
      <p>
      {props.children}
      </p>
    </div>
  );
}

export default Project;
