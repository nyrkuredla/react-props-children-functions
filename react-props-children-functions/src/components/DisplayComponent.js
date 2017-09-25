import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="display text-uppercase col-sm-12">{this.props.sayWhat}</div>
    );
  }
}
