import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService'

import  './Main.css';

export  default  class Main extends Component {

    state = {
        planet: {},

    };
    constructor({planetId}){
        super();
        this.state = {planetId};
        console.log(this.state)
    }
    componentWillReceiveProps(planetId) {
        this.setState({
            planetId: this.props.planetId
        });
    }
    componentDidMount() {
        this.selectPlanet(this.state.planetId);
    }

    result = new SwapiService();

    selectPlanet = (planetId) => {
        // console.log(planetId);
        const planet = this.result.getPlanet(planetId);
        this.setState({
            planet: planet
        });
        console.log(this.state.planet)
    }


    render() {

        const {planet} = this.state;

        return (
            <div className="jumbotron ">
                <h1 className="display-3">name</h1>
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