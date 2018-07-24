
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import PokemonImage from '../PokemonImage/PokemonImage';

import '../PokemonRow/PokemonRow.css';


class PokemonRow extends PureComponent{

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
                <div className="PokemonRow" onClick={onClick}>
                    <PokemonImage width="75px" src={this.getImageSource(url)} />
                    <span key={name + "_name"}>{this.capitalizeName(name)}</span>            
                </div>
            </Fragment>
        );
    }
}

export default PokemonRow;

PokemonRow.propTypes = {
    name : PropTypes.string,
    url : PropTypes.string,
    onClick : PropTypes.func,
};

PokemonRow.defaultProps = {
    name : '',
    url : '',
    onClick: () => {},
};