import React , { Component } from 'react';
import { Button, Input } from 'react-materialize';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

class InfoForm extends Component{
	render(){
		return(
			<div>
				<h2>You Are Qualified To Drive With Lyft!</h2>
				<p>Enter your info below</p>
				<form>
					<Input icon="account_circle" onChange={this.props.name} type="text" label="First and Last Name" />
					<PhoneInput country="US" placeholder="Enter phone number" onChange={this.props.phone} />
					<Button className="right" onClick={this.props.submit}>Submit</Button>
				</form>
			</div>
		)
	}
}

export default InfoForm;