import React,{Component} from 'react';

import SwapiService from '../../services/SwapiService'

import  './Main.css';

export  default  class Main extends Component{
    constructor(props){
        super(props);
        this.selectPlanet(this.props.planetId)
    }
    state = {
        planet:{}

    }
  
    
    result = new SwapiService();

    selectPlanet = async (planetId) =>{
     const   planet = await this.result.getPlanet(planetId)
        this.setState({
            planet:planet
        });
        console.log (this.state.planet)
    }
      

 
    render() {
        const {planet} = this.state;
    
        return(
            <div className="jumbotron ">
                <h1 className="display-3">{planet.name}</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="../a" role="button">Learn more</a>
                </p>
            </div>

        )
    }
}