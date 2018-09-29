import React, { PureComponent, Fragment } from 'react';
import PokemonTypeBadge from '../../components/PokemonTypeBadge/PokemonTypeBadge';

class PokemonDetails extends PureComponent{
    render(){
        
        const {details} = this.props;
        
        return(
            <Fragment>
                    {
                    
                    
                            Object.keys(details.types).map((key) => {
                                return <PokemonTypeBadge key={key} type={details.types[key].type.name} />;
                            })
                    
                    
                    }
                <h4>Abilities:</h4>
                {
                    <ul>
                        {
                            Object.keys(details.abilities).map((key) =>{
                                return <li key={key}>{details.abilities[key].ability.name}</li>;
                            })
                        }
                    </ul>
                }
                {/* <h4>Moves:</h4>
                {
                    Object.keys(details.moves).map((key) => {
                        return <span key={key}>{details.moves[key].move.name}</span>;
                    })
                } */}
            </Fragment>
        )
    }
}

export default PokemonDetails;

PokemonDetails.defaultProps = {
    details : {
        types : [],
    },
};