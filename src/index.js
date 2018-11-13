import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import Header from './components/header';
import Home from './components/home';
import Contact from './components/contact';
import Resume from './components/resume';
import Art from './components/art';
import Melee from './components/melee';
import MeleeMarth from './components/melee_marth';
import MeleeFalcon from './components/melee_falcon';
import MeleeFalco from './components/melee_falco';

import Footer from './components/footer';

import reducers from './reducers';

import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//imgur client id 00f96ae8c2910ae
//imgur client secret 1325feaf96e3714a948b24cb60842c5ca2ba3e96
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
          <Switch>
            <Route path ="/melee/falco" component={MeleeFalco} />
            <Route path ="/melee/falcon" component={MeleeFalcon} />
            <Route path ="/melee/marth" component={MeleeMarth} />
            <Route path ="/melee" component={Melee} />

            <Route path ="/contact" component={Contact} />
            <Route path ="/resume" component={Resume} />
            <Route path ="/art" component={Art} />
            <Route path ="/" component={Home} />
          </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
