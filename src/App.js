import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Mainview from './Mainview.js';
import Addevent from './Addevent';
import RefuelHistory from './RefuelHistory';
import Login from './Login';
import { Router, Route } from 'react-router-dom';
import * as axios  from 'axios';




class App extends Component {

    state = {
        events: []
    }
    componentDidMount() {
        axios.get(`//localhost/fuel/getevent.php`)
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }

  render() {
    return (
      <div className="App">
        <Nav events={this.state.events}/>
        <Route exact path={'/'} component={Mainview}/>
        <Route path={'/addevent'} component={Addevent}/>
        {/*<Route path={'/history'} component={RefuelHistory}/>*/}
        <Route
              path='/history'
              render={(props) => <RefuelHistory events={this.state.events} />}
        />
        <Route path={'/login'} component={Login}/>
      </div>
    );
  }
}

export default App;
