import React from 'react';

function LoadingText(props){
    return(
        <div className="Pokedex__Loading text-center">
            <img width="30px" src={require('../../images/loader.gif')} alt="loading-gif"/>
            &nbsp;&nbsp;<strong>Loading ReactDex...</strong>
        </div>
    );    
}

export default LoadingText;