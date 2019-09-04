import React, { Component, Fragment } from 'react';
import './Bio.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

export default class Bio extends Component {

  render () {
    return (
      <div className={"bio-wrapper"}>
        <h1>Bio</h1>
        <div className={"strip-container"}>
          {["Beep", "Cheep", "Leep", "Neep"].map((content, i) => {
            const margin = 300;
            const width  = 400 + 20 * i;
            return (
              <div className={"bio-strip"} style={{marginLeft: margin, width: width}} key={i}>{content}</div>
            )
          })}
        </div>
        <BioCard/>
        <Likes/>
      </div>
    )
  }
}

const BioCard = () => {
  return (
    <div className={"bio-card"}>
      <div className={"bio-img"}>
        <img />
      </div>
      <div className={"bio-deets"}>
        <p>Robert Merriman</p>
        <ul>
          <li>I'm me</li>
          <li>I'm me</li>
          <li>I'm me</li>
          <li>I'm me</li>
        </ul>
      </div>
    </div>
  )
};

const Likes = () => {
  return (
    <Fragment>
      <h2>Likes:</h2>
      <Music/>
      <Films/>
    </Fragment>
  )
};

// Use spotify Api to get album covers and song details? and display as cool interactive list thing
// Maybe have a spotify player at the bottom if possible to sample music.
// Could create a playlist that the site reads and generates the music list from 🤔
const Music = () => {
  return (
    <Fragment>
      <div>Music:</div>
      <ul>
        <li>Electro Indie:</li>
        <ul>
          <li>Big Data</li>
          <li>CHVRCHES</li>
          <li>Electric Guest</li>
          <li>LCD Soundsystem</li>
          <li>Neon Indian</li>
          <li>Two Door Cinema Club</li>
        </ul>
        <li>Dance:</li>
        <ul>
          <li>JNL</li>
          <li>Me & My Toothbrush</li>
          <li>M|O|O|N</li>
        </ul>
        <li>Scatty:</li>
        <ul>
          <li>Brookes Brothers</li>
          <li>Chase & Status</li>
          <li>Delta Heavy</li>
          <li>Dimension</li>
          <li>DJ Zinc</li>
          <li>Fine Art</li>
          <li>Hybrid Minds</li>
          <li>Kove</li>
          <li>Matrix & Futurebound</li>
          <li>Sub Focus</li>
          <li>Wilkinson</li>
        </ul>
        <li>Hip&Hop:</li>
        <ul>
          <li>Dead Players</li>
          <li>Foreign Beggars</li>
          <li>Four Owls</li>
          <li>Mouse Outfit</li>
          <li>Biggie</li>
          <li>Wizzy</li>
          <li>Verb T</li>
        </ul>
        <li>Retrowave:</li>
        <ul>
          <li>Arcade High</li>
          <li>Carpenter Brut</li>
          <li>Com Truise </li>
          <li>FM-84</li>
          <li>Lazerhawk</li>
          <li>Magic Sword</li>
          <li>Nightrunner</li>
          <li>Perturbator</li>
        </ul>
        <li>Prog Rock:</li>
        <ul>
          <li>Yes</li>
        </ul>
        <li>Odd but cool:</li>
        <ul>
          <li>Public Service Broadcasting</li>
          <li>Bill Wurtz</li>
        </ul>
        <li>Comedy:</li>
        <ul>
          <li>Ninja Sex Party</li>
          <li>Starbomb</li>
        </ul>
        <li>Game:</li>
        <ul>
          <li>Toby Fox</li>
          <li>Danny Baranowsky</li>
        </ul>
      </ul>
    </Fragment>
  )
};

const Films = () => {
  return (
    <Fragment>
      <div>Films:</div>

      <ul>
        <li>Classic</li>
        <ul>
          <li>The Shawshank Redemption</li>
          <li>Pulp Fiction</li>
          <li>The Usual Suspects</li>
          <li>The Matrix</li>
          <li>Momento</li>
          <li>Back to the Future</li>
          <li>Star Wars</li>
          <li>Indiana Jones</li>
          <li>Reservoir Dogs</li>
          <li>Die Hard</li>
          <li>Big Trouble in Little China</li>
          <li>Escape from New York</li>
          <li>Jurassic Park</li>
          <li>The Truman Show</li>
        </ul>
        <li>Modern</li>
        <ul>
          <li>Mad Max: Fury Road</li>
          <li>Interstellar</li>

        </ul>
        <li>Animated</li>
        <ul>
          <li>Wall-E</li>
        </ul>

      </ul>
    </Fragment>
  )
};

