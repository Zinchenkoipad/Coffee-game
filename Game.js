import React from 'react';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import GameOverScreen from './GameOverScreen.js';

class Game extends React.Component{
	constructor(){
		super()
		var storedBestScore = 0;
		if (localStorage.getItem('bestScore')){
			storedBestScore = parseInt(localStorage.getItem('bestScore'))
		}
		this.state = {
			start: true,
			game: false,
			over: false,
			qtyty: 1,
			bestScore: storedBestScore
		}
		this.startGame = this.startGame.bind(this);
		this.stopGame = this.stopGame.bind(this);
		this.setGame = this.setGame.bind(this);
		this.gameOver = this.gameOver.bind(this);
		this.againGame = this.againGame.bind(this);
		this.setBestScore = this.setBestScore.bind(this);
	}

	startGame(){
		this.setState({start: false, game: true, over: false})
	}
	setGame(qtyty){
		this.setState({qtyty: qtyty})
	}
	stopGame(){
		this.setState({start: true, game: false, over: false})
	}
	gameOver(){
		this.setState({start: false, game: false, over: true})
	}
	againGame(){
		this.setState({start: true, game: false, over: false})
	}
	setBestScore(qtyty){
		this.setState({bestScore: qtyty});
		localStorage.setItem('bestScore', qtyty)
	}

	render(){
		return(
			<div>

				{this.state.start ? 
				<StartScreen
					start={this.startGame}
					setGame={this.setGame}
				/>
				: ''}

				{this.state.game ?
				<GameScreen 
					best={this.state.bestScore}
					setBest={this.setBestScore}
					qtyty={this.state.qtyty}
					stop={this.stopGame}
					over={this.gameOver}
				/>
				: ''}

				{this.state.over ?
				<GameOverScreen 
					action={this.againGame}
					retry={this.startGame}
				/>
				: ''}

				<div style={{textAlign:'center'}} >
					<div style={{margin:'10px'}}>Best score: {this.state.bestScore}</div>
				</div>

			</div>
		)
	}
}


export default Game;



