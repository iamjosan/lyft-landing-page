import React, { Component } from "react";
import questions from "./questions";
import QuestionBox from "./question-box";
import Header from "./header";
import InfoForm from './InfoForm';
//import './lyft-logo.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: questions, counter: 0, show: 'header', name: '', phone: '' };
		this.setState = this.setState.bind(this);
		this.name = this.name.bind(this);
		this.phone = this.phone.bind(this);
		this.submit = this.submit.bind(this);
  }
	name(e){
		this.setState({name: e.target.value}, () => console.log(this.state));
	}
	submit(e){
		e.preventDefault();
		//make sure name and number are filled out
		if(this.state.name.length === 0){
			alert('Please enter your full name');
		}
		if(this.state.phone == undefined || this.state.phone.length < 12){
			alert('Please enter your phone number');
		}
		this.setState({phone: e.target.value});
	}
	phone(val){
		this.setState({phone: val}, () => console.log(this.state))
	}
  render() {
		const showComponent = {
			'header': <Header hide={() => this.setState({show: 'questions'})} />,
			'questions': <QuestionBox keyVal={this.state.counter} 
						question={this.state.questions[this.state.counter] !== undefined ? this.state.questions[this.state.counter].text : null}
						btnNo={this.state.questions[this.state.counter] !== undefined ? this.state.questions[this.state.counter].no : null}
						btnYes={() => this.setState((prevState, props) => ({counter: prevState.counter +1}), () => {
							console.log(this.state)
							if(this.state.counter === this.state.questions.length){
								this.setState({show: 'form'});
							}
							}
						)}
				/>,
			'form': <InfoForm name={this.name} phone={this.phone}  submit={this.submit}/>
		};
    return (
		  <div>
				<div id="navbar">
	        <img src="lyft-logo.jpg" />
				</div>
				<main>
					{showComponent[this.state.show]}
				</main>
			</div>
    );
  }
}

export default App;
