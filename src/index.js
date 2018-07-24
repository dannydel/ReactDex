import React from 'react';
import ReactDOM from 'react-dom';

import PokemonData from './data-containers/PokemonData/PokemonData';
import Pokedex from './components/Pokedex/Pokedex';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

const PokedexWithData = PokemonData(Pokedex);

ReactDOM.render(<PokedexWithData />, document.getElementById('root'));
registerServiceWorker();
