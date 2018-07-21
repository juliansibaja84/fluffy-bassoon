import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { ThemeProvider } from 'react-jss'

// Components
import StyledButton from './styled-button';

jss.setup(preset());

const styles = {
  button: {
    background: 'red',
    color: 'white',
    fontSize: 12
  },
  ctaButton: {
    composes: '$button',
    background: 'blue',
    fontWeight: 'bold'
  }
};
const { classes } = jss.createStyleSheet(styles).attach();

const mainTheme = {
  colorPrimary: 'blue',
  colorActive: 'red',
};

export default class Scomp extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={mainTheme}>
          <StyledButton >Something here</StyledButton>
        </ThemeProvider>
        <button class={ classes.button }>something</button>
        <p>Something not here</p>
        <button class={ classes.ctaButton }>space void</button>
      </div>
    );
  }
}

