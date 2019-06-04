import React, { Component } from 'react';
import '../styles/Battle.css';

class Battle extends Component { 

    componentDidMount() {
        const monster = [...this.props.monsters].filter( item => item.name === this.props.name);
        this.monster = monster[0];
        this.setState({
            intervalID: setInterval(this.fightTurn, 1000),
            monsterHp: this.monster.hp,
            monsterDmg: this.monster.dmg
        })
    }
    state = {
        witcherHp: 1000,
        myTurn: true
    }  

    fightTurn = ()=> {
        const { intervalID,  myTurn, monsterDmg} = this.state;
        if(myTurn){
            this.setState(prevState => ({
                witcherHp: prevState.witcherHp - (monsterDmg - this.props.witcher.armor.armor < 0 ? 1 : monsterDmg - this.props.witcher.armor.armor),
                myTurn: !prevState.myTurn
            }))
            this.isFightOver(intervalID, this.state.witcherHp, 0);
        }
        else {
            this.setState(prevState => ({
                monsterHp: prevState.monsterHp - this.props.witcher.sword.dmg, // zamienic na hp potwora
                myTurn: !prevState.myTurn
            }))
            this.isFightOver(intervalID, this.state.monsterHp, this.monster.prize);
        }

    }

    isFightOver = (intervalID, hp, prize) => {
        if(hp <= 0) {
            clearInterval(intervalID);
            this.props.getPrize(prize)
        }
    }

    
    
    render() {
        return (
            <div className="battle">
                <section>
                    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/PL/pl/999/EP4497-CUSA01439_00-AV00000000000003/1553228853000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000" alt="Geralt"/>
                    <h3>Geralt</h3>
                    <span>HP: {this.state.witcherHp} </span>
                    <div className={`${this.state.myTurn ? "sword" : "" }`}></div>
                </section>
                {this.monster && 
                <section>
                    <img src={this.monster.img} alt={this.monster.name}/>
                    <h3>{this.monster.name}</h3>
                    <span>HP: {this.state.monsterHp}</span>
                    <div className={`${!this.state.myTurn ?"hand" : ""}`}></div>
                </section>}
                 
            </div>
        );
    }
}

export default Battle;
