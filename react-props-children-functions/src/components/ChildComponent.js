import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <button className="button col align-self-center btn btn-secondary btn-default" type="submit" onClick={this.props.onClick}>Say it!</button>
        </div>
      </div>
    );
  }
}
