import React from 'react';
import { connect } from 'react-redux';

class UserList extends React.Component {
  
  getDetails() {
    if (!this.props.user) return <h4>Select a user</h4>;
    return (
      <React.Fragment>
        <li key={this.props.user.id}>ID:{this.props.user.id}</li>
        <li key={this.props.user.first}>Name:{this.props.user.first} {this.props.user.last}</li>
        <li key={this.props.user.age}>Name:{this.props.user.age}</li>
        <li key={this.props.user.description}>Name:{this.props.user.description}</li>
      </React.Fragment>
    );
  }
  
  render() {
    return(
        <div>
          <h2>Username list</h2>
          {this.getDetails()}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser,
  };
}

export default connect(mapStateToProps)(UserList);