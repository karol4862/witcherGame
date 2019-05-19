import React from 'react';

const Item = props => {
    return ( 
        <div className="card" onClick = {() => props.handleCardItem(props.item.cost, props.item)}>
            <img src={props.item.img} alt={props.item.name}/>
            <h3>{props.item.name}</h3>
            <span>DMG / Armor: {!props.item.dmg ? props.item.armor : props.item.dmg} </span>
            <span>Cost: {props.item.cost} gold</span>
        </div>
    );
}
 
export default Item;