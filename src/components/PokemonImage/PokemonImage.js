import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PokemonImage extends PureComponent{
    render(){
        const { width, key, src } = this.props;

        return(
            <img width={width} key={key} src={src}  alt="pokemon-img"/>
        );
    }

}

export default PokemonImage;

PokemonImage.propTypes = {
    width : PropTypes.string,
    key : PropTypes.string,
    src : PropTypes.string,
}