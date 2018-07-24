import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './PokemonSearchInput.css';

/**
 * Simple Input component.
 */

export default class PokemonSearchInput extends PureComponent {
    constructor() {
      super();
      this.handleInput = this.handleInput.bind(this);
    }
  
    handleInput(event) {
      this.props.onInput(event.target.value);
    }
  
    render() {
      return (
        <div className="PokemonSearch">
          {/* <SearchIcon className="PokemonFilter__search" /> */}
          <input
            className="PokemonSearch__Input"
            placeholder="Search by Name"
            onInput={this.handleInput}
            
          />
        </div>
      );
    }
  }
  
  PokemonSearchInput.propTypes = {
    onInput: PropTypes.func,
  };
  
  PokemonSearchInput.defaultProps = {
    onInput: () => {},
  };