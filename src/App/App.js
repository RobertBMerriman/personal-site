import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Bio from '../Bio/Bio.js';

class App extends Component {

  render() {
    return (
     <BrowserRouter>
       <Layout />
     </BrowserRouter>
    );
  }

}

const Layout = () => {
  return (
    <React.Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to my personal site yyyeeeeeeaaaaa boi</h1>
      </header>

      <div className={"content"}>
        <Switch>
          <Route path={"/"} exact component={HomePage}/>
          <Route path={"/bio"} component={Bio} />

          <Route component={NoMatch}/>
        </Switch>
      </div>
    </React.Fragment>
  );
};

const NoMatch = () => {
  return (
    <h1>404 bois pack your stuff and get back to a real URL</h1>
  );
};

const HomePage = () => {
  return (
    <div className="App-intro">

      What kinda stuff do I want?
      <ul>
        <li><Link to={"/bio"}>Bio</Link> - me as a playing/top trumps card thing, stats and stuff, ittle dew is the kind of style I have in my mind's eye</li>
        <li>Projects</li>
        <li>Blog?</li>
      </ul>

      <br/>

      Other ideas
      <ul>
        <li>Animated guide character</li>
        <li>Games and reviews personal stuff maybe idk depends if I want to</li>
      </ul>

    </div>
  );
};

export default App;
