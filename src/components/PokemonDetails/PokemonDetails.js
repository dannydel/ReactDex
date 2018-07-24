import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonImage from '../PokemonImage/PokemonImage';

class PokemonDetails extends PureComponent{
    render(){
        
        const {details} = this.props;
        //console.log(details);
        return(
            <Fragment>
                <h2>{details.name.replace(/^\w/, c => c.toUpperCase())}</h2>
                <h2>Types:</h2>
                    {
                    <ul>
                        { 
                            Object.keys(details.types).map((key) => {
                                return <li key={key}>{details.types[key].type.name}</li>
                            })
                        }
                    </ul> 
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