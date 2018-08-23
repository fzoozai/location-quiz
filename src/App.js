import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Header () {
  return (
    <div className="row header">
      <div className="jumbotron col-10 offset-1">
        <h1>Location Quiz</h1>
        <p>Select the city where the illustrated sight is located.</p>
      </div>
    </div>
  );
}

function Location ({title, onClick}) {
  return (
    <div className="answer" onClick={() => {onClick(title);}}>
      <h4>{title}</h4>
    </div>
  )

}

function Turn ({sight, locations, highlight, onAnswerSelected}) {

  function highlightToBgColor(highlight) {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }
    return mapping[highlight];
  }
  return (
    // <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
    <div className="row turn">
      <div className="col-4 offset-1">
        <img src={sight.imageUrl} className="locationImage" alt="Location" />
      </div>
      <div className="col-6">
        {locations.map((location) => <Location title={location} key={location} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

function Continue () {
  return (<div/>);
}

function SuccessMessage() {
  return (
    <div class="alert alert-success" role="alert">
      Good Job! Your answer was lit.
    </div>
  )
}

function ErrorMessage() {
  return (
    <div class="alert alert-danger" role="alert">
      Bruhhh...you can do this better.
    </div>
  )
}

function NonSelectionMessage() {
  return (
    <div class="alert alert-light" role="alert">
      Still waiting for your answer bro. Come on...
    </div>
  )
}

function Footer ({highlight}) {
  if(highlight === 'correct') {
    return <SuccessMessage />
  } else if(highlight === 'wrong') {
    return <ErrorMessage />
  } else {
    return <NonSelectionMessage />
  }
}

function App ({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Header />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue />
      <Footer highlight={highlight}/>
    </div>
  );
}

export default App;
