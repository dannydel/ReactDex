import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Pokedex.css';

import PokemonCard from '../PokemonCard/PokemonCard';
import LoadingText from '../LoadingText/LoadingText';
import PokedexHeader from '../PokedexHeader/PokedexHeader';


class Pokedex extends PureComponent {
    constructor(){
        super();

        this.state = {pokemonDetails : [], fetched : false};
    }

    render(){
         const { updateSearch, pokemon, loading } = this.props;
         
        return(           
            <Fragment>
                <PokedexHeader title={"ReactDex"} updateSearch={updateSearch} />
                <div className="container">
                    <div className="Pokedex__Main">
                        <div className="Pokedex__Grid">
                            {
                                !loading && pokemon.length > 0 ? pokemon.map(p =>( 
                                    <PokemonCard 
                                        key={p.name}
                                        name={p.name} 
                                        url={p.url}
                                    />
                                    )) : 
                                     <LoadingText text="Loading Reactdex" />
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
            name: PropTypes.string
        })
    ),

    updateSearch : PropTypes.func.isRequired
};

Pokedex.defaultProps = {
    pokemon : [],
};
