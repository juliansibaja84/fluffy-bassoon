import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-details';

class App extends React.Component {
  render() {
    return(
        <div>
          <h2>Username list</h2>
          <UserList></UserList>
          <h2>Details</h2>
          <UserDetails></UserDetails>
        </div>
    );
  }
}

export default App;