import React, { Component } from "react";
import { Card, Button } from "react-materialize";

class QuestionBox extends Component {
	constructor(props){
		super(props);
		this.state = {question: this.props.question, btnNo: this.props.btnNo}
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		if(nextProps !== this.props){
			this.setState({question: nextProps.question, btnNo: nextProps.btnNo})
		}
	}
  render() {
    const btns = [
      <Button className="grey lighten-2 black-text" waves="red" onClick={this.state.btnNo}>
        No
      </Button>,
      <Button className="right" onClick={this.props.btnYes}>Yes</Button>
    ];
    return <Card key={this.props.keyVal} actions={btns}><p>{this.state.question}</p></Card>;
  }
}

export default QuestionBox;
