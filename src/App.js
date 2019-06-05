import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Hero from './pages/Hero';
import Shop from './pages/Shop';
import Order from './pages/Order';
import './styles/RWD.css';


class App extends Component {
  state = {
    gold: 350,
    armor: {
      id:1,
      name: "Ursine armor",
      armor: 25,
      type: "armor",
      img: "https://vignette.wikia.nocookie.net/witcher/images/d/d0/Tw3_ursine_armor.png/revision/latest?cb=20151008141254",
      cost: 200
    },
    sword: {
      id:2,
      name: "Witcher's steel sword",
      type: "sword",
      dmg: 20,
      img: "https://vignette.wikia.nocookie.net/witcher/images/7/73/Sword_Witcher%27s_Steel_Blade.png/revision/latest?cb=20170504205815",
      cost: 250
    }
  }

  handleCardItem = (cost, item) => {
    if(cost < this.state.gold) {
      this.setState( prevState => ({
        gold: prevState.gold - cost,
        [item.type]: item
      }))
    }
    else alert("Not enought gold")
  }

  getPrize = (prize) => {
    this.setState(prevState => ({
      gold: prevState.gold + prize
    }))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="blockPage"> Rotate your device <br/> <i className="fas fa-sync-alt"></i></div>
          <nav>
            <ul>
              <NavLink to="/" exact className="buttonMenu"><li></li></NavLink>
              <NavLink to="/shop" className="buttonMenu"><li>Gold: {this.state.gold}</li></NavLink> 
              <NavLink to="/order" className="buttonMenu"><li></li></NavLink> 
            </ul>
            
          </nav>
          <Route path="/" exact render= {()=> <Hero state = {this.state}/>}/>
          <Route path="/shop"  render= {()=> <Shop handleCardItem = {this.handleCardItem}/>}/>
          <Route path="/order" render={() => <Order witcher = {this.state} getPrize = {this.getPrize}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;

