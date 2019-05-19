import React, { Component } from 'react';
import '../styles/Shop.css';
import Item from '../components/Item';

class Shop extends Component {
    state = {
        items: [{
            id:1,
            name: "Witcher's steel sword",
            dmg: 20,
            type: "sword",
            img: "https://vignette.wikia.nocookie.net/witcher/images/7/73/Sword_Witcher%27s_Steel_Blade.png/revision/latest?cb=20170504205815",
            cost: 250
          },
          {
            id:2,
            name: "Ursine armor",
            armor: 25,
            type: "armor",
            img: "https://vignette.wikia.nocookie.net/witcher/images/d/d0/Tw3_ursine_armor.png/revision/latest?cb=20151008141254",
            cost: 200
          },
          {
            id:3,
            name: "G'valchir",
            type: "sword",
            dmg: 30,
            img: "https://vignette.wikia.nocookie.net/witcher/images/9/9e/Weapons_Mahakaman_rune_sihill.png/revision/latest?cb=20170504203531",
            cost: 350
          },
          {
            id:5,
            name: "Illegal sword",
            dmg: 45,
            type: "sword",
            img: "https://vignette.wikia.nocookie.net/witcher/images/e/e9/Weapons_Illegal_Sword.png/revision/latest?cb=20170504204011",
            cost: 550
          },
          {
            id:6,
            name: "Ard'aenye",
            dmg: 65,
            type: "sword",
            img: "https://vignette.wikia.nocookie.net/witcher/images/b/b8/Weapons_ardaeyne.png/revision/latest?cb=20170504204300",
            cost: 850
          },
          {
            id:7,
            name: "Enhanced Ursine armor",
            armor: 40,
            type: "armor",
            img: "https://vignette.wikia.nocookie.net/witcher/images/2/22/Tw3_ursine_armor_enhanced.png/revision/latest?cb=20151008143436",
            cost: 350
          },
          {
            id:8,
            name: "Superior Ursine armor",
            armor: 55,
            type: "armor",
            img: "https://vignette.wikia.nocookie.net/witcher/images/f/fd/Tw3_ursine_armor_superior.png/revision/latest?cb=20151008151740",
            cost: 550
          },
          {
            id:9,
            name: "Mastercrafted Ursine armor",
            armor: 75,
            type: "armor",
            img: "https://vignette.wikia.nocookie.net/witcher/images/9/93/Tw3_ursine_armor_mastercrafted.png/revision/latest?cb=20151008153808",
            cost: 800
          },
          {
            id:10,
            name: "Grandmaster Ursine armor",
            armor: 95,
            type: "armor",
            img: "https://vignette.wikia.nocookie.net/witcher/images/0/0a/Tw3_armor_bear_armor_4.png/revision/latest?cb=20160531143958",
            cost: 1100
          }
        ]
    }
    render() {
      const items = [...this.state.items].map(item => <Item key = {item.id} item = {item} handleCardItem = {this.props.handleCardItem}/>)
        return (
            <main className="shop">
                <h2> Store </h2>
                <section>
                    {items}
                </section>
            </main>
        );
    }
}

export default Shop;
