import React, { Component } from 'react';
import OrderElement from '../components/OrderElement';
import '../styles/Order.css';
import Battle from './Battle';
import {Route} from 'react-router-dom';

class Order extends Component {
    monsters = [
        {
            name: "Foglet",
            dmg: 45,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/foglet_icon.jpg",
            prize: 150,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/foglet.jpg",
            hp: 450
        },
        {
            name: "Ghoul",
            dmg: 30,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ghoul_icon.jpg",
            prize: 80,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ghoul.jpg",
            hp: 450
        },
        {
            name: "Werewolf",
            dmg: 50,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/werewolf_icon.jpg",
            prize: 180,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/werewolf.jpg",
            hp: 450
        },
        {
            name: "Griffin",
            dmg: 65,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/griffin_icon.jpg",
            prize: 230,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/griffin.jpg",
            hp: 450
        },
        {
            name: "Woodland Spirit",
            dmg: 55,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/leshen_icon.jpg",
            prize: 210,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/leshen.jpg",
            hp: 450
        },
        {
            name: "Fiend",
            dmg: 130,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/fiend_icon.jpg",
            prize: 250,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/fiend.jpg",
            hp: 450
        },
        {
            name: "Wyvern",
            dmg: 90,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/wyvern_icon.jpg",
            prize: 120,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/wyvern.jpg",
            hp: 450
        },
        {
            name: "Basilisk",
            dmg: 140,
            icon: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/basilisk_icon.jpg",
            prize: 200,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/basilisk.jpg",
            hp: 450
        }
    ]
    render() {
        let currentOrders = [];
        for (let i = 0; i < 5; i++) {
            const monsterIndex = Math.floor(Math.random() * this.monsters.length);
            currentOrders.push(this.monsters[monsterIndex])
        }
        currentOrders = currentOrders.map( (monster, index) => <OrderElement key={index} monster={monster}/>)
        return ( 
            <main className = "order">
                <Route path="/order" exact render={()=> (
                    <div >
                       <h2>Orders</h2>
                        <ul>
                            {currentOrders}
                        </ul> 
                    </div>
                )} />
                <Route path="/order/:name" render={({match})=> <Battle monsters= {this.monsters} name={match.params.name} witcher={this.props.witcher} getPrize = {this.props.getPrize}/>}/>
                
            </main>
        );
    }
}

export default Order;

