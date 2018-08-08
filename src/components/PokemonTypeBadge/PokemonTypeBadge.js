import React, { PureComponent, Fragment } from 'react';
import '../PokemonTypeBadge/PokemonTypeBadge.css'


class PokemonTypeBadge extends PureComponent{
    render(){
        const {type} = this.props;

        return(
            <Fragment>
                <span className={"PokemonTypeBadge " +type}>{type}</span>
            </Fragment>
        )
    }
}

export default PokemonTypeBadge;