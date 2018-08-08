import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
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
        this.getPokemonDetails(name);

        let card = document.getElementById(name + '_card');
        card.querySelector('.PokemonCard__Back').classList.toggle('PokemonCard__Back__Show');
        card.classList.toggle('is-flipped');

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
        const details = this.state.pokemonDetails;
        const fetched = this.state.fetched;
        return(
            <Fragment key={name + "_card"} >
                {/* <div className="PokemonCard"  onClick={onClick}> */}
                <div className="scene">
                    <div id={name + "_card"} className="PokemonCard" onClick={() => this.showDetails(name)}>
                        <div className="PokemonCard__Face PokemoCard__Front">
                            <PokemonImage width="100%" src={this.getImageSource(url)} />
                            <h4 className="card-title" key={name + "_name"}>{this.capitalizeName(name)}</h4>
                        </div>
                        <div className="PokemonCard__Face PokemonCard__Back">
                            {
                                fetched ? <PokemonDetails  details={details}/> : 
                                <h3>Fetching {name}'s details!</h3>
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
    url : PropTypes.string,
    onClick : PropTypes.func
};

PokemonCard.defaultProps = {
    name : '',
    url : '',
    onClick: () => {}
};