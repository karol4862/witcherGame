import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Hero from './pages/Hero';


class App extends Component {
  state = {
    gold: 1000,
    armor: null,
    sword: null
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <NavLink to="/" exact><li></li></NavLink>
              <NavLink to="/store"><li>Gold: {this.state.gold}</li></NavLink> 
              <NavLink to="/adventure"><li></li></NavLink> 
            </ul>
          </nav>
          <Route path="/" render= {()=> <Hero />}/>
        </div>
      </Router>
    );
  }
}

export default App;

