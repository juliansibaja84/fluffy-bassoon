import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';

//Components
import Home from './components/home';
import Tarot from './components/tarot';
import Dreams, { Dream }  from './components/dreams';
import Practices, { Practice } from './components/practices';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
            <NavLink to="/" exact activeStyle={{color: '#66DDAA'}}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/tarot/" exact activeStyle={{color: '#66DDAA'}}>Tarot</NavLink>
            </li>
            <li>
            <NavLink to="/dreams/" exact activeStyle={{color: '#66DDAA'}}>Dreams</NavLink>
            </li>
            <li>
            <NavLink to="/practices/" exact activeStyle={{color: '#66DDAA'}}>Practices</NavLink>
          </li>
          </ul>
          <Route path="/" exact strict component={Home}/>
          <Route path="/tarot/" exact strict component={Tarot}/>
          <Route path="/dreams/" exact strict component={Dreams}/>
          <Route path="/dreams/:id" exact strict component={Dream}/>
          <Route path="/practices/" exact strict component={Practices}/>
          <Route path="/practices/:id" exact strict component={Practice}/>
          <Route path="/something/" exact strict render={
            () => {
              return (<h1>Something without components</h1>);
            }
          }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
