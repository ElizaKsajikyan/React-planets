import React, {Component} from 'react';

import SwapiService from '../../services/SwapiService'

import './Main.css';

export default class Main extends Component {

    state = {
        planet: {},
        star: {},
        starId: null
    };
    result = new SwapiService();


    componentDidMount() {
        // console.log(this.props.planetId);
        // this.getFirstPlanet(this.props.planetId);
        // this.getStar()
        this.props.metpd(this.getStar)
    }


    getStar = async(starId) => {
        alert();
        console.log(starId)
        let id = await starId;
          this.setState = ({
            starId:await id
        })
          console.log(this.state.starId)
    }

    componentDidUpdate() {

    }

    render() {
        const {star: {name, model, starship_class}} = this.state;
        return (
            <div className="jumbotron col">
                <h1 className="display-3">Name: {name}</h1>
                <p className="lead">starship_class:{starship_class}</p>
                <hr className="my-4"/>
                <p>model:{model}</p>
            </div>

        )
    }
}