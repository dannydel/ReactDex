import React from 'react';
import './AppTitle.css';

export default function AppTitle(props){
    return(
        <div>
            <div className="Pokedex__header"></div>
            <div className="Pokedex__title">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}