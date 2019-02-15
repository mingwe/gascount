import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import Mainview from './Mainview.js';
import Addevent from '../containers/Addevent';
import EventsList from '../containers/EventsList';
import Details from '../containers/EventDetails';
import LoadRemote from '../containers/LoadRemote';
// import Login from './Login';
import { Router, Route } from 'react-router-dom';

// import {loadRemoteMileage} from '../actions';



class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Route exact path={'/'} component={Mainview}/>
        <Route path={'/addevent'} component={Addevent}/>
        <Route path={'/history'} component={EventsList}/>
        <Route path={'/history'} component={Details}/>
        <Route path={'/history'} component={LoadRemote}/>
        {/*<Route path={'/login'} component={Login}/>*/}
      </div>
    );
  }
}

export default App;
