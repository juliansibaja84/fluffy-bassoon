import React, { Component } from 'react';
import socketIoClient from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: socketIoClient('http://127.0.0.1:5001'),
      color: 'black',
    };
  }

  send = () => {
    this.state.socket.emit('change_color', this.state.color);
  }

  setColor = (col) => {
    this.setState({
      color: col,
    });
  }

  render() {
    this.state.socket.on('change_color', (color) => {
      document.body.style.backgroundColor = color
    });
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send()}>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
      </div>
    );
  }
}

export default App;
