import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { capitalizeWord } from '../../utils/Common';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import '../PokemonCard/PokemonCard.css';


class PokemonCard extends PureComponent{
    constructor(){
        super();
        this.state = {
            fetched : false,
            pokemonDetails : []
        }; 
    }

    getPokemonDetails(name){

        fetch('https://pokeapi.co/api/v2/pokemon/' + name + '/')
        .then(res => res.json())
        .then(data =>  
            this.setState({
                pokemonDetails: data,
                fetched : true
            })
        );
    }

    showDetails(name){
        let card = document.getElementById(name + '_card');
        
        this.getPokemonDetails(name);

        card.querySelector('.PokemonCard__Back').classList.toggle('PokemonCard__Back__Show');
        card.classList.toggle('is-flipped');
    }

    getImageSource(url){
        let id = url.split('/')[6];
        return require('../../images/pokemon/' + id +'.png');
    }
    
    render(){
        const { name, url } = this.props;
        const details = this.state.pokemonDetails;
        const fetched = this.state.fetched;
        return(
            <Fragment key={name + "_card"} >
                <div className="Pokedex__Surface">
                    <div id={name + "_card"} className="PokemonCard" onClick={() => this.showDetails(name)}>
                        <div className="PokemonCard__Face PokemoCard__Front">
                            <PokemonImage width="100%" src={this.getImageSource(url)} />
                            <h4 className="card-title" key={name + "_name"}>{ capitalizeWord(name) }</h4>
                        </div>
                        <div className="PokemonCard__Face PokemonCard__Back">
                            {
                                fetched ? <PokemonDetails  details={details}/> : 
                                <div className="Pokedex__Fetching">
                                    <h3 >Capturing {capitalizeWord(name)}...</h3>
                                    <img width="70px" src={require('../../images/loader.gif')} alt="loading-gif"/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PokemonCard;

PokemonCard.propTypes = {
    name : PropTypes.string,
    url : PropTypes.string
};

PokemonCard.defaultProps = {
    name : '',
    url : ''
};