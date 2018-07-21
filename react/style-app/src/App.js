import React, { Component } from 'react';
import logo from './logo.svg';
import Styled, { keyframes, ThemeProvider } from 'styled-components';

// Components
import Scomp from './scomp';

const Outer = Styled.div`
  text-align: center;
`;

const Header = Styled.div`
  background-color: papayawhip;
  height: 150px;
  padding: 20px;
  color: white;

  > h1 {
    color: ${props => props.theme.fg || 'palevioletred'};
    font-size: 1.5em;
  }
`;

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = Styled.img`
  animation: ${Spin} infinite 20s linear;
  ${ props => props.backwards && 'animation-direction: reverse;'}
  height: 80px;
`;

const AppIntro = Styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <Outer>
        <ThemeProvider theme={{
          fg: 'tomato',
          bg: 'papayawhip'
        }}>
          <Header>
            <Logo src={logo} alt="logo"/>
            <Logo backwards src={logo} alt="logo"/>
            <h1>Welcome to React</h1>
          </Header>
        </ThemeProvider>
        <AppIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppIntro> 
        <Scomp />
      </Outer>
    );
  }
}

export default App;
