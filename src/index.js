import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {BrowserRouter} from 'react-router-dom';
import promise from 'redux-promise';


import reducers from './reducers';
import App from './app';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* <div>
  <Header />
    <Switch>
      <Route path ="/melee/falco/:id" component={MeleeFalco} />
      <Route path ="/melee/falcon/:id" component={MeleeFalcon} />
      <Route path ="/melee/marth/:id" component={MeleeMarth} />
      <Route path ="/melee" component={Melee} />

      <Route path ="/projects" component={Projects} />
      <Route path ="/resume" component={Resume} />
      <Route path ="/art" component={Art} />
      <Route path ="/" component={Home} />
    </Switch>
  <Footer/>
</div>
   */



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
//imgur client id 00f96ae8c2910ae
//imgur client secret 1325feaf96e3714a948b24cb60842c5ca2ba3e96
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
