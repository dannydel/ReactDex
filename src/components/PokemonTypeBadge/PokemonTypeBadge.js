import React, { PureComponent, Fragment } from 'react';
import '../PokemonTypeBadge/PokemonTypeBadge.css'


class PokemonTypeBadge extends PureComponent{
    render(){
        const {type} = this.props;

        const styleType = "PokemonTypeBadge " + type; 

        return(
            <Fragment>
                <span className={styleType}>{type}</span>
            </Fragment>
        )
    }
}

export default PokemonTypeBadge