import React, { Component } from 'react';

export default class Practices extends Component {
  render() {
    return (
      <h1>Practices</h1>
    );
  }
}

export class Practice extends Component {
  render() {
    return (
      <h2>
        This is the practice {this.props.match.params.id}
      </h2>
    );
  }
}