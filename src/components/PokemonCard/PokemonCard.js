
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonImage from '../PokemonImage/PokemonImage';

import '../PokemonCard/PokemonCard.css';


class PokemonCard extends PureComponent{
    getPokemonDetails(){

    }

    showDetails(name){
        let plus = document.getElementById(name + "_plus");

        if(plus.className === "plus-details"){
            plus.className = "close-details";
        }else{
            plus.className = "plus-details";
        }

        //go fetch details and display details area once fetch is complete?
    }

    getImageSource(url){
        let id = url.split('/')[6];
        return require('../../images/pokemon/' + id +'.png');
    }

    capitalizeName(name){
        return name.replace(/^\w/, c => c.toUpperCase());
    }
    
    render(){
        const {name, url, onClick} = this.props;

        return(
            <Fragment key={name + "_card"} >
                {/* <div className="PokemonCard"  onClick={onClick}> */}
                <div className="PokemonCard" onClick={() => this.showDetails(name, 45)}>
                    <PokemonImage width="100%" src={this.getImageSource(url)} />
                    <h4 className="card-title" key={name + "_name"}>{this.capitalizeName(name)}</h4>
                    <h1 id={name + "_plus"} key={name} className="plus-details">+</h1>
                    <div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PokemonCard;

PokemonCard.propTypes = {
    name : PropTypes.string,
    url : PropTypes.string,
    onClick : PropTypes.func,
};

PokemonCard.defaultProps = {
    name : '',
    url : '',
    onClick: () => {},
};