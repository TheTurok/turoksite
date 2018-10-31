import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css'


export default class Contact extends Component {
  render() {
    return (
      <div >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <a href="https://www.linkedin.com/in/turokchoi/" target = "_blank" class="fa fa-linkedin"></a>
        <a href="https://www.instagram.com/tworocksimagination/" target = "_blank" class="fa fa-instagram"></a>
        <a href="https://github.com/TheTurok" target = "_blank" class="fa fa-github"></a>
        <a href="mailto:turokchoi@gmail.com" target = "_blank"><img src={require('../files/gmail.svg.png')} class = "fa fa-google"/></a>
      </div>
    );
  }
}
