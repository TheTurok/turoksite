import React, {Component} from 'react';

import {Route, Switch} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Resume from './components/resume';
import Art from './components/artPage';
import Melee from './components/melee';
import Projects from './components/projects';
import MeleeCharacters from './components/melee_characters';

import Footer from './components/footer';


import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//imgur client id 00f96ae8c2910ae
//imgur client secret 1325feaf96e3714a948b24cb60842c5ca2ba3e96
export default class App extends Component {
  render(){
  return(
      <div>
        <Header />
          <Switch>
            <Route path ="/melee/:character/:id" component={MeleeCharacters} />
            <Route path ="/melee" component={Melee} />

            <Route path ="/projects" component={Projects} />
            <Route path ="/resume" component={Resume} />
            <Route path ="/art" component={Art} />
            <Route path ="/" component={Home} />
          </Switch>
        <Footer/>
      </div>
    );
  }
}
