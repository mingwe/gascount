import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import Mainview from './Mainview.js';
import Addevent from '../containers/Addevent';
// import RefuelHistory from './RefuelHistory';
import EventsList from '../containers/mileageevents-list';
import Details from '../containers/mileageevents-active-details';
import Login from './Login';
import { Router, Route } from 'react-router-dom';
// import * as axios  from 'axios';

import {loadRemoteMileage} from '../actions';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Route exact path={'/'} component={Mainview}/>
        <Route path={'/addevent'} component={Addevent}/>
        <Route path={'/history'} component={EventsList}/>
        <Route path={'/history'} component={Details}/>
        <Route path={'/login'} component={Login}/>
      </div>
    );
  }
}

export default App;
