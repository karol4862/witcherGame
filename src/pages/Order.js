import React, { Component } from 'react';
import OrderElement from '../components/OrderElement';
import '../styles/Order.css';
import {Route} from 'react-router-dom';

class Order extends Component {
    monsters = [
        {
            name: "Foglet",
            dmg: 45,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/foglet_icon.jpg"
        },
        {
            name: "Ghoul",
            dmg: 30,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ghoul_icon.jpg"
        },
        {
            name: "Werewolf",
            dmg: 50,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/werewolf_icon.jpg"
        },
        {
            name: "Griffin",
            dmg: 65,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/griffin_icon.jpg"
        },
        {
            name: "Woodland Spirit",
            dmg: 55,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/leshen_icon.jpg"
        },
        {
            name: "Fiend",
            dmg: 130,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/fiend_icon.jpg"
        },
        {
            name: "Wyvern",
            dmg: 90,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/wyvern_icon.jpg"
        },
        {
            name: "Basilisk",
            dmg: 140,
            img: "https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/basilisk_icon.jpg"
        }
    ]
    render() {
        console.log(this)
        let currentOrders = [];
        for (let i = 0; i < 5; i++) {
            const monsterIndex = Math.floor(Math.random() * this.monsters.length);
            currentOrders.push(this.monsters[monsterIndex])
        }
        currentOrders = currentOrders.map( (monster, index) => <OrderElement key={index} monster={monster}/>)
        return ( 
            <main className = "order">
                <h2>Orders</h2>
                <ul>
                    {currentOrders}
                </ul>
                
            </main>
        );
    }
}

export default Order;

