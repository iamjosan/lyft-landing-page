import React, { Component } from 'react';
import { Button } from 'react-materialize';

class Header extends Component{
	render(){
		return(
			<div>
				<h1>Earn Money By Driving With Lyft</h1>
				<p>Check if you qualify</p>
				<Button id="get-started" onClick={this.props.hide}>Get Started</Button>
			</div>
		)
	}
}

export default Header;