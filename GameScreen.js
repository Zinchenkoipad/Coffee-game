import React from 'react';
import cup_0 from "./cups/cup_0.png";
import cup_1 from "./cups/cup_1.png";
import cup_2 from "./cups/cup_2.png";
import cup_3 from "./cups/cup_3.png";
import cup_4 from "./cups/cup_4.png";
import cup_5 from "./cups/cup_5.png";


class Cup extends React.Component{
	constructor(){
		super()
		this.state={
			cups:[
				cup_0,
				cup_1,
				cup_2,
				cup_3,
				cup_4,
				cup_5
			],
			cup:0
		}
		this.reset = this.reset.bind(this)
	}

	reset(){
		this.setState({cup:0})
	}

	componentDidMount(){
			var interval = Math.floor(Math.random() * (10 - 2 + 1) ) + 2
			var timer = setInterval(() => {
				this.setState({cup: this.state.cup + 1});
				if(this.state.cup===5){
					clearInterval(timer);
					setTimeout(this.props.over, 100)
				}
			}, 200 * interval);
	}

	componentWillUnmount(){
		this.reset()
	}

	render(){

		return(
			<div style={{margin:'5px'}} onClick={this.reset} >
				<img src={this.state.cups[this.state.cup]} alt='cup' />
			</div>
		)
	}
}

class GameScreen extends React.Component{
	constructor(){
		super()
		this.state={
			score: 0,
			time: 0
		}
	}

	componentDidMount(){
		setInterval(() => {
			this.setState({score: this.state.score + this.props.qtyty});
		}, 1)
		setInterval(() => {
			this.setState({time: this.state.time + 1});
		}, 1)
	}

	stop(){
		alert('do you really want to stop the game, you will loose your progress')
	}

	componentWillUnmount(){
		if(this.props.best < this.state.score){
			this.props.setBest(this.state.score)
		}
	}

	render(){
		let cups = []
		for(var i=1; i<=this.props.qtyty; i++){
			cups.push(<Cup key={i} over={this.props.over} />);
		}
		return(
			<div style={{textAlign:'center'}}>
				<div style={{marginBottom:'20px'}}>
					Your score: <span style={{color: this.state.score < this.props.best ? 'black' : 'red'}} >{this.state.score}</span>
				</div>
				<div style={{display:'flex', justifyContent:'center', maxWidth:'450px',flexWrap:'wrap', margin: '0 auto'}}>
					{
						cups
					}
				</div>
				<div style={{margin:'20px 0',color:'blue', fontSize:'20px'}}>
					{this.state.time/1000}
				</div>

				<div onClick={this.props.stop} style={{width:'94px', backgroundColor:'grey', margin:'20px auto',fontSize:'18px',padding:'5px',cursor:'pointer'}}>STOP</div>
			</div>
		)
	}
}

export default GameScreen;