import React, { Component } from 'react';

import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';

export default class ParentComponent extends Component {
  constructor(props){
    super(props);

    //state lives here
    this.state = {
      whatToSay: " ",
      whatWasSaid: " "
    }
  }
  handleInput = (e) => {
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: " "});

  }
  render() {
    return (
      <div className="align-self-center form-wrapper">
        <form className="form-control">
          <input className="col align-self-center" onChange={this.handleInput} type="text" size='30' value={this.state.whatToSay} />
          <ChildComponent onClick={this.handleSubmit}/>
        </form>
        <div className="content-wrapper clearfix">
          <DisplayComponent sayWhat={this.state.whatWasSaid}/>
          <div className="dino-pic"></div>
        </div>
    </div>
    );
  }
}
