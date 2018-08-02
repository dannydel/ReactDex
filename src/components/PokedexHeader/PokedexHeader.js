import React, { PureComponent, Fragment } from 'react';
import './PokedexHeader.css';

class PokedexHeader extends PureComponent {

    componentDidMount(){
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll(){
        
        console.log('fired');
        const distanceY = window.pageYOffset || 
            document.documentElement.scrollTop,
            shrinkOn = 150,
            headerElement = document.getElementById('js-header');

            

            console.log(distanceY);
            if(distanceY > shrinkOn){
                headerElement.classList.add('smaller');
                
            }else{
                headerElement.classList.remove('smaller');
            }
    }

    
    render(){
        const {title} = this.props;
        return(
            <header id="js-header">
                <div className="container clearfix">
                    <h1 id="logo">{title}</h1>
                    
                </div>
            </header>
        )
    }
}

export default PokedexHeader;