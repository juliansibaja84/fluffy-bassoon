import React, { Component } from 'react';

export default class Dreams extends Component {
  render() {
    return (
      <h1>Dreams</h1>
    );
  }
}

export class Dream extends Component {
  render() {
    return (
      <h2>
        This is the record {this.props.match.params.id}
      </h2>
    );
  }
}