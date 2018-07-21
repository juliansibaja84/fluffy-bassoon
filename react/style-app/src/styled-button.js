import React, { Component } from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

const styles = theme => ({
  root: {
    color: 'white',
    fontSize: 16,
    background: props => props.active
      ? theme.colorActive
      : theme.colorPrimary,
    fontWeight: props => props.active && 'bold'
  },
});

class StyledButton extends Component {
  render() {
    const {
      classes, theme,
      className, children, active,
      ...etc
    } = this.props;
    const cls = cx(classes.root,className);
    return (
      <button className={cls} {...etc}>{children}</button>
    );
  }
}

export default withStyles(styles)(StyledButton);