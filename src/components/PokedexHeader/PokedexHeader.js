import React, { PureComponent} from 'react';
import  PropTypes  from 'prop-types';
import './PokedexHeader.css';
import { isMobile } from '../../utils/Common';
import PokemonSearchInput from  '../PokemonSearchInput/PokemonSearchInput';

class PokedexHeader extends PureComponent {

    componentDidMount(){
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll(){
       if(!isMobile()){
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const distanceY = window.pageYOffset || 
            document.documentElement.scrollTop,
            shrinkOn = 120,
            headerElement = document.getElementById('js-header');
            if(distanceY > shrinkOn){
                headerElement.classList.add('smaller');
                
            }else{
                headerElement.classList.remove('smaller');
            }

            if(width < 500){
                headerElement.classList.remove('smaller');
            }
       }
    }

    
    render(){
        const {title, updateSearch} = this.props;
        return(
            <header id="js-header">
                <div className="container clearfix">
                    <h1 id="logo">{title}</h1>
                    <nav>
                        <PokemonSearchInput onInput={updateSearch} />
                    </nav>
                </div>
            </header>
        );
    }
}

export default PokedexHeader;

PokedexHeader.propTypes = {
    updateSearch : PropTypes.func.isRequired,
}