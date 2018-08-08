import React, { PureComponent, Fragment } from 'react';
import PokemonTypeBadge from '../../components/PokemonTypeBadge/PokemonTypeBadge';

class PokemonDetails extends PureComponent{
    render(){
        
        const {details} = this.props;
        
        return(
            <Fragment>
                {/* <h2>{details.name.replace(/^\w/, c => c.toUpperCase())}</h2> */}
                    {
                    
                    
                            Object.keys(details.types).map((key) => {
                                return <PokemonTypeBadge key={key} type={details.types[key].type.name} />;
                            })
                    
                    
                    }
                <h2>Abilities:</h2>
                {
                    <ul>
                        {
                            Object.keys(details.abilities).map((key) =>{
                                return <li key={key}>{details.abilities[key].ability.name}</li>
                            })
                        }
                    </ul>
                }
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