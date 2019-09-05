import React, { Component } from 'react'
import './App.css';
import InitialView from './components/InitialView'

class App extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      gameState: '',
      numberOfGuesses: 0,
      secretNumber: 0,
      currentGuess: 0
    }

    this.state = this.initialState;

    this.playStandard = this.playStandard.bind(this);

    this.playExpert = this.playExpert.bind(this);

    this.resetGame = this.resetGame.bind(this);
  }

  incrementGuesses = () => {
    this.setState({ numberOfGuesses : this.state.numberOfGuesses + 1});
  }

  playStandard = () => {
    this.setState({
      gameState: 'standard', 
      secretNumber: Math.floor((Math.random() * 10) + 1),
    });
  }

  playExpert = () => {
    this.setState({
      gameState: 'expert',
      secretNumber: Math.floor((Math.random() * 100) + 1),
    });
  }

  resetGame = () => {
    this.setState({
      gameState: '',
      numberOfGuesses: 0,
      secretNumber: 0,
      currentGuess: 0
    })
  }

  handleGuess = (event) => {
    this.setState({
      currentGuess: parseInt(event.target.value)
    })
  }

  render() {
    const { gameState, numberOfGuesses, secretNumber, currentGuess } = this.state;
    
    return (
      <div className="App">
        <InitialView handleGuess={this.handleGuess} incrementGuesses={this.incrementGuesses} currentGuess={currentGuess} secretNumber={secretNumber} numberOfGuesses={numberOfGuesses} resetGame={this.resetGame} playStandard={this.playStandard} playExpert={this.playExpert} gameState={gameState} />
      </div>
    );
  }

}

export default App;
