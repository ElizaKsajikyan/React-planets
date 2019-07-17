import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService'

import './Main.css';

export default class Main extends Component {

    state = {
        planet: {},
        star: {}
    };
    result = new SwapiService();


    componentDidMount() {
        // console.log(this.props.planetId);
        // this.getFirstPlanet(this.props.planetId);
        // this.getStar()
        this.props.onStarData(this.getStar())
    }


    getStar(starId) {
        alert();
        // const star = this.result.getStar(starId)
        // this.setState({
        //     star
        // })
    }

    render() {
        const {star: {name, model, starship_class}} = this.state;
        return (
            <div className="jumbotron ">
                <h1 className="display-3">Name: {name}</h1>
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