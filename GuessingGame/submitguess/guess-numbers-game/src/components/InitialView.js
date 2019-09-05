import React, { Component } from 'react'
import StandardGame from './StandardGame'
import ExpertGame from './ExpertGame'

export class InitialView extends Component {
    
    checkGuess = () => {

        console.log(`The secret number answer is: ${this.props.secretNumber}`);
        console.log(`Checking your guess.. ${this.props.currentGuess}`);
        this.props.incrementGuesses();
        console.log(`Number of guesses is now: ${this.props.numberOfGuesses}`);

        if (this.props.secretNumber === this.props.currentGuess) {
            console.log('You win!');
        }
        
    }

    render() {

        return (
            <div>
                {this.props.gameState === '' ? (
                    <div>
                        <h2>React - Number Guessing Game</h2>
                        <h4>Start Game</h4>
                        <button onClick={this.props.playStandard} className="button button-standard">Standard</button>
                        <button onClick={this.props.playExpert} className="button button-expert">Expert</button>
                    </div>
                ) : (
                   <div>
                     <h4>Game has started.</h4>
                   </div>
                    
                )}

                {this.props.gameState === 'expert' && <ExpertGame checkGuess={this.checkGuess} numberOfGuesses={this.props.numberOfGuesses} resetGame={this.props.resetGame} handleGuess={this.props.handleGuess} />}
                {this.props.gameState === 'standard' && <StandardGame checkGuess={this.checkGuess} numberOfGuesses={this.props.numberOfGuesses} resetGame={this.props.resetGame} handleGuess={this.props.handleGuess} />}
            </div>
        )
    }
}

export default InitialView
