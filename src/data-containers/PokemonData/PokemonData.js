import React, {Component} from 'react';

import searchPokemon from '../../utils/searchPokemon.js';

export default function PokemonData(WrappedComponent){
    return class extends Component {
        constructor() {
            super();

            this.state = {
                searchTerm : '',
                pokemon : [],
                searchedPokemon : [],
                fetched: false,
            };

            this.updateSearch = this.updateSearch.bind(this);
        }
    
        componentDidMount() {
            fetch('http://pokeapi.salestock.net/api/v2/pokemon/?limit=50/')
            .then(res => res.json())
            .then(data =>  
                this.setState({
                    pokemon: data.results,
                    searchedPokemon : searchPokemon(this.state.searchTerm, data.results),
                    loading: false,
                })
            );
        }

        updateSearch(searchTerm){
            const { pokemon } = this.state;
            
            this.setState({
                searchedPokemon : searchPokemon(searchTerm, pokemon),
                loading: false,
            });
        }

        render(){
            const { searchedPokemon, loading } = this.state;

            return(
                <WrappedComponent 
                {...this.props}
                loading = {loading}
                pokemon={searchedPokemon}
                updateSearch={this.updateSearch}
                />
            );
        }
    }
}
    