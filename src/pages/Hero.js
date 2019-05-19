import React from 'react';
import '../styles/Hero.css';

const Hero = (props) => {
    return ( 
        <main className="hero">
            <h2>My equipment</h2>
            
            <section>
                <img src={props.state.sword.img} alt="Sword 1"/> 
                <div>
                    <span>{props.state.sword.name}</span>
                    <span>DMG: {props.state.sword.dmg}</span>
                    <span>Cost: {props.state.sword.cost}</span>
                </div> 
            </section>
            <section>
                <img src={props.state.armor.img} alt="Sword 1"/> 
                <div>
                    <span>{props.state.armor.name}</span>
                    <span>Def : {props.state.armor.armor}</span>
                    <span>Cost: {props.state.armor.cost}</span>
                </div> 
            </section>

        </main>
    );
}
 
export default Hero;