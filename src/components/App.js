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
import {jQuery as $} from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'

import Background from '../bg.jpg';
import {APP_REL_PATH} from "../constants";

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center -120px",
    backgroundImage: `url(${Background})`,
};



class App extends Component {


  render() {

    return (
        <div style={sectionStyle}>
            <div className={'py-5 bg-dark-custom'}>
                <div className="App col-xs-12 col-md-6 offset-md-3 bg-white-custom my-5 pb-5 pt-0 overflow-hidden">
                    {/*<div className="App container bg-white py-5 my-5">*/}
                    <Nav/>
                    <Route exact path={APP_REL_PATH + '/'} component={Mainview}/>
                    <Route path={APP_REL_PATH + '/addevent'} component={EventAddForm}/>
                    <Route path={APP_REL_PATH + '/history'} component={EventsList}/>
                    <Route path={APP_REL_PATH + '/history'} component={Details}/>
                    <Route path={APP_REL_PATH + '/history'} component={LoadRemote}/>
                    <Route exact path={APP_REL_PATH + '/'} component={LoadRemote}/>
                    {/*<Route path={'/login'} component={Login}/>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
