import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/OrderElement.css';

const OrderElement = props => {
    const path = `order/${props.monster.name}`;
    return ( 
        <li ><Link to={path} className="orderElement"> 
            <section>
                <h4> {props.monster.name} </h4>
                <p> Prize : /dodac kwote/</p>
            </section>
            <img src={props.monster.img} alt={props.monster.name}/>
        </Link>  </li>
    ); // dodac routa w order ze zmienna {match} ktora bedzie uzywana do sortowania ze state
}
 
export default OrderElement;
