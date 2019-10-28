import React, { Component } from 'react';
import ArtDetails from './ArtDetails';

import art0 from '../art/art0.jpg';
import art1 from '../art/art1.jpg';
import art2 from '../art/art2.jpg';
import art3 from '../art/art3.jpg';
import art4 from '../art/art4.jpg';
import art5 from '../art/art5.jpg';
import art6 from '../art/art6.jpg';
import art7 from '../art/art7.jpg';

const Art = () => {
  const ART_OBJECTS = {
    0 : {title:'Yoyo Brothers' , picture: `${art0}`},
    1 : {title:'Sf Giants', picture: `${art1}`},
    2 : {title:'Sun And Moon', picture: `${art2}`},
    3 : {title:'Time to Go', picture: `${art3}`},
    4 : {title:'Panda Skullpture', picture: `${art4}`},
    5 : {title:'Flat Time & Still Space', picture: `${art5}`},
    6 : {title:'Biking Right', picture: `${art6}`},
    7 : {title:'Sculpture', picture: `${art7}`}
  }

  const ORDER = [3, 0, 1, 2, 4, 5, 6, 7];

  function displayArt() {
    let artdisplay = []

    for(let i = 0; i < ORDER.length; i++ ){
      artdisplay.push(
        <ArtDetails title={ART_OBJECTS[ORDER[i]].title} art={ART_OBJECTS[ORDER[i]].picture}/>
      );
    }
    return artdisplay;
  }

  return (
    <div className = "content text-center">
      {displayArt()}
    </div>
  );
}

export default Art;
