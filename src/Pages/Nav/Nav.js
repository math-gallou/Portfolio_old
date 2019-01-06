import React from 'react';
import './style.css';

function BoxNav(props){
    const parent = props.object;

    return (
        <nav className="nav">
            <ul>
                <li>
                    <button onClick={parent.handleClick}>Accueil</button>
                </li>
                <li>
                    A propos
                </li>
                <li>
                    Travaux
                </li>
                <li>
                    Parcours
                </li>
                <li>
                    Compétences
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>);
}

export default BoxNav;