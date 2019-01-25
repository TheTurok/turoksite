import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/style.css';

export default class Footer extends Component {

  render() {
    return (
      <div id = "foot" className = "col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2"> 
          <div id = "icons">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <a href="mailto:turokchoi@gmail.com" target = "_blank" class="fa fa-envelope"></a>
            <a href="https://www.linkedin.com/in/turokchoi/" target = "_blank" class="fa fa-linkedin"></a>
            <a href="https://www.instagram.com/tworocksimagination/" target = "_blank" class="fa fa-instagram"></a>
            <a href="https://github.com/TheTurok" target = "_blank" class="fa fa-github"></a>
          </div>

        Powered by React.js and Node.js
        <br/>
        <Link to = "https://github.com/TheTurok/turoksite" target = "_blank" > Github: Website Code </Link>
      </div>

    );
  }
}
