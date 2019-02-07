import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Mainview from './Mainview.js';
import Addevent from './Addevent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          </p>
        </header>
        <Nav/>
        <Mainview/>
        <Addevent/>
      </div>
    );
  }
}

export default App;
