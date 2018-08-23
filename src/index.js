import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { shuffle, sample } from 'underscore';

const sights = [
  {
    name: 'Millenium Park',
    imageUrl: 'images/millenium-park.png',
    location: 'Chicago'
  },
  {
    name: 'Golden State Bridge',
    imageUrl: 'images/golden-gate_web.png',
    location: 'San Francisco'
  },
  {
    name: 'Empire State Building',
    imageUrl: 'images/empire-state-building.png',
    location: 'New York'
  },
  {
    name: 'Caveliers',
    imageUrl: 'images/caveliers.png',
    location: 'Cleveland'
  }
];

function getTurnData(sights) {
  const allLocations = sights.reduce(function (p, c, i) {
    return p.concat(c.location);
  }, []);

  const fourRandomLocations = shuffle(allLocations).slice(0,4);
  const answer = sample(fourRandomLocations);

  return {
    sight: sights.find((sight) => sight.location === answer),
    locations: fourRandomLocations,
  }

}

const state = {
  // turnData: {
  //   sight: sights[0],
  //   location: sights[0].location
  // }
  turnData: getTurnData(sights),
  highlight: ''
}

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.sight.location === answer;
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

function render() {
  ReactDOM.render(<App {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
}
render();
registerServiceWorker();
