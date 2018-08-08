import React from 'react';
import '../LoadingText/LoadingText.css';

function LoadingText(props){

    return(
        <div className="Pokedex__Loading">
            <img width="30px" src={require('../../images/loader.gif')} alt="loading-gif"/>
            &nbsp;&nbsp;<strong>{props.text}</strong>
        </div>
    );    
}

export default LoadingText;