import React from 'react';

class StartScreen extends React.Component{
	constructor(){
		super()
		this.state = {
			qtyty: 1
		}
		this.more = this.more.bind(this);
		this.less = this.less.bind(this)
	}

	more(){
		if(this.state.qtyty<8){
			this.setState({qtyty: this.state.qtyty + 1})
		}
	}
	less(){
		if(this.state.qtyty>1){
			this.setState({numberOfCups: this.state.qtyty - 1})
		}
	}

	componentWillUnmount(){
		this.props.setGame(this.state.qtyty)
	}

	render(){
		return(
			<div style={{textAlign:'center'}} >
				<div>Number of cups:</div>
				<div style={{display:'flex', justifyContent:'center', marginTop: '20px'}}>
					<div style={{width:'50px', height:'50px', border:'1px solid black', marginRight:'2px',fontSize:'42px'}}>{this.state.qtyty}</div>
					<div>
						<div onClick={this.more} style={{backgroundColor: 'grey', width:'50px', height:'25px', marginBottom: '2px', cursor:'pointer'}}>+</div>
						<div onClick={this.less} style={{backgroundColor: 'grey', width:'50px', height:'25px',cursor:'pointer'}}>-</div>
					</div>
				</div>
				<div onClick={this.props.start} style={{width:'94px', backgroundColor:'grey', margin:'5px auto',fontSize:'18px',padding:'5px',cursor:'pointer'}} >START</div>
			</div>
		)
	}
}

export default StartScreen;