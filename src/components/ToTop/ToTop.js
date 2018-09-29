import React, { PureComponent} from 'react';
import './ToTop.css';

class ToTop extends PureComponent{

    componentDidMount(){
        window.addEventListener('scroll', this.showToTop);
    }

    showToTop(){
        const distanceY = window.pageYOffset || 
            document.documentElement.scrollTop;
        const showOn = 100;
        const toTopElement = document.getElementById("ToTop");
        console.log(distanceY);

        if(distanceY >= showOn){
            toTopElement.classList.remove('hide');
        }else{
            toTopElement.classList.add('hide');
        }
    }

    goToTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

    render(){
        return(
            <div id="ToTop" className="ToTop_Wrapper hide" onClick={() => this.goToTop()}>
                <img src={require("../../images/pokemon/237.png")} alt="To Top" title="To Top" />
            </div>
        );
    
    }
}

export default ToTop;