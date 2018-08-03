
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonImage from '../PokemonImage/PokemonImage';

import '../PokemonCard/PokemonCard.css';


class PokemonCard extends PureComponent{

    // toggleDrawer() {
        
    //     this.setState(state => ({
    //       showDrawer : !state.showDrawer,
    //     }));
    //     document.getElementById("root").style.marginLeft = "0";

    //     console.log(this.state.showDrawer);
    //   }

    getPokemonDetails(){

    }

    getImageSource(url){
        let id = url.split('/')[6];
        return require('../../images/pokemon/' + id +'.png');
    }

    capitalizeName(name){
        return name.replace(/^\w/, c => c.toUpperCase());
    }
    
    render(){
        const {name, url, onClick} = this.props;

        return(
            <Fragment key={name + "_card"} >
                <div className="PokemonCard"  onClick={onClick}>
                    <PokemonImage width="100%" src={this.getImageSource(url)} />
                    <div className="PokemonCard__Container">
                        <h4 className="card-title" key={name + "_name"}>{this.capitalizeName(name)}</h4>
                    </div>            
                </div>
            </Fragment>
        );
    }
}

export default PokemonCard;

PokemonCard.propTypes = {
    name : PropTypes.string,
    url : PropTypes.string,
    onClick : PropTypes.func,
};

PokemonCard.defaultProps = {
    name : '',
    url : '',
    onClick: () => {},
};