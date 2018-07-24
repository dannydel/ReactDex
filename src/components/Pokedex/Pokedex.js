import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Pokedex.css';

import AppTitle from '../../components/AppTitle/AppTitle';
import PokemonSearchInput from '../../components/PokemonSearchInput/PokemonSearchInput';
import PokemonRow from '../PokemonRow/PokemonRow';
import LoadingText from '../LoadingText/LoadingText';
import PokemonDetails from '../PokemonDetails/PokemonDetails';


class Pokedex extends PureComponent {
    constructor(){
        super();

        this.state = {pokemonDetails : [], fetched : false};

        this.fetchPokemonDetails = this.fetchPokemonDetails.bind(this);

    }

    fetchPokemonDetails(name,e){
        e.preventDefault();
        this.setState({
            pokemonDetails : [],
            fetched : false,
        })

        fetch('https://pokeapi.co/api/v2/pokemon/' + name + '/')
        .then(res => res.json())
        .then(data =>  
            this.setState({
                pokemonDetails: data,
                fetched : true,
            })
        );

    }


    render(){
         const { updateSearch, pokemon, loading } = this.props;
         
        return(           
            <Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <AppTitle title={"ReactDex"} />
                    </div>
                    <div className="row">
                        
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6 justify-content-center align-items-center">
                        
                            <div className="Pokedex__PokemonList">
                                <PokemonSearchInput onInput={updateSearch} />
                                {
                                    !loading && pokemon.length > 0 ? pokemon.map(p =>( 
                                        <PokemonRow 
                                            key={p.name}
                                            name={p.name} 
                                            url={p.url} 
                                            onClick={ (e) => {this.fetchPokemonDetails(p.name,e)}}
                                            />
                                    )) : 
                                         <LoadingText />
                                }
                            </div>
                        </div>
                        <div className="screen col-6">
                            { this.state.fetched ?
                                <PokemonDetails details={this.state.pokemonDetails} fetched={this.state.fetched}/> :
                                <LoadingText/>
                            }
                            
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Pokedex;

Pokedex.propTypes = {
    pokemon : PropTypes.arrayOf(
        PropTypes.shape({
            url : PropTypes.string,
            name: PropTypes.string,
        })
    ),

    updateSearch : PropTypes.func.isRequired,
};

Pokedex.defaultProps = {
    pokemon : [],
};