import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Mainview from './Mainview.js';
import Addevent from './Addevent';
import Login from './Login';
// import { BrowserRouter } from 'react-router-dom';
import { Router, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
        {/*</header>*/}
        <Nav/>
        {/*<Switch>*/}
          <Route exact path={'/'} component={Mainview}/>
          <Route path={'/addevent'} component={Addevent}/>
          <Route path={'/login'} component={Login}/>
        {/*</Switch>*/}
        {/*<Mainview/>*/}
        {/*<Addevent/>*/}
        {/*<Login/>*/}
      </div>
    );
  }
}

export default App;
