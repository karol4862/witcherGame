import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/OrderElement.css';

const OrderElement = props => {
    const path = `order/${props.monster.name}`;
    const {name, icon, prize} = props.monster;
    return ( 
        <li ><Link to={path} className="orderElement"> 
            <section>
                <h4> {name} </h4>
                <p> Prize : {prize}</p>
            </section>
            <img src={icon} alt={name}/>
        </Link>  </li>
    ); 
}
 
export default OrderElement;
