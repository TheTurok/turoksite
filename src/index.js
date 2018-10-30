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

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path ="/contact" component={Contact} />
          <Route path ="/resume" component={Resume} />
          <Route path ="/art" component={Art} />
          <Route path ="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
