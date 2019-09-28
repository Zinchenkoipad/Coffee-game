import React from 'react';
import cup_5 from './cups/cup_5.png';

class GameOverScreen extends React.Component{
	constructor(){
		super()
		this.state = {
		}
	}


	render(){
		return(
			<div style={{textAlign:'center'}} >
				<div style={{margin:'51px 25px 25px 25px'}} onClick={this.reset} >
					<img src={cup_5} alt='cup' />
				</div>
				<div style={{margin:'20px', color:'red'}} >GAME OVER</div>
				<div onClick={this.props.retry} style={{width:'90px', backgroundColor:'grey', margin:'20px auto',fontSize:'18px',padding:'5px',cursor:'pointer'}} >Retry</div>
				<div onClick={this.props.action} style={{width:'118px', backgroundColor:'grey', margin:'20px auto',fontSize:'18px',padding:'5px',cursor:'pointer'}} >Change Settings</div>
			</div>
		)
	}
}

export default GameOverScreen;