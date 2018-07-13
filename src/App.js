import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my personal site yyyeeeeeeaaaaa boi</h1>
        </header>
        <div className="App">
          <p className="App-intro">

            What kinda stuff do I want?
            <ul>
              <li>Bio - me as a playing/top trumps card thing, stats and stuff, ittle dew is the kind of style I have in my mind's eye</li>
              <li>Projects</li>
              <li>Blog?</li>
            </ul>

            <br/>

            Other ideas
            <ul>
              <li>Animated guide character</li>
              <li>Games and reviews personal stuff maybe idk depends if I want to</li>
            </ul>

          </p>
        </div>
      </React.Fragment>
    );
  }

}

export default App;
