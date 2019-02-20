import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import Mainview from './Mainview.js';
import EventAddForm from '../containers/EventAddForm';
import EventsList from '../containers/EventsList';
import Details from '../containers/EventDetails';
import LoadRemote from '../containers/LoadRemote';
// import Login from './Login';
import { Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {loadRemoteMileage} from '../actions';



class App extends Component {

  render() {
    return (
      <div className={'bg-secondary py-5'}>
          {/*<div className="App col-xs-12 col-md-6 offset-md-3 bg-white">*/}
          <div className="App container bg-white py-5 my-5">
              <Nav/>
              <Route exact path={'/'} component={Mainview}/>
              <Route path={'/addevent'} component={EventAddForm}/>
              <Route path={'/history'} component={EventsList}/>
              <Route path={'/history'} component={Details}/>
              <Route path={'/history'} component={LoadRemote}/>
              {/*<Route path={'/login'} component={Login}/>*/}
          </div>
      </div>
    );
  }
}

export default App;
