import React, {Component} from 'react';
import Loading from './../Loading'
import './Slider.css';
import SwapiService from '../../services/SwapiService';

export default class Slider extends Component {

    componentDidMount() {
        setInterval(() => {
            this.getRandomPlanet()
        }, 5000)
    }

    result = new SwapiService();

    state = {
        id: null,
        planet: {},
        planets: this.result.getPlanets(),
        isLoading: true,
        isError: true,
        removeShow: true,
    };

    getRandomPlanet = async () => {
        const planetId = Math.floor(Math.random() * 20);
        try {
            const planet = await this.result.getPlanet(planetId);
            this.setState({
                id: planet.id,
                planet: planet,
                isLoading: false,
                isError: false
            })
        } catch (err) {
            this.setState({
                isLoading: false
            })
        }

    };


    componentWillUnmount() {
        console.log('componentWillUnmount()')
    }

    render() {
        const {planet, id, isLoading, isError, removeShow} = this.state;
        const d = !(isError && isLoading);
        const loading = isLoading ? <Loading/> : null;
        const content = d && !isError ? <RandomPlanet planet={planet} id={id}/> : null;

        return (
            <div className="row">
                {loading}
                {content}
            </div>
        )
    }

};


const RandomPlanet = ({planet, id}) => {
    return (
        <div className="card mb-3">
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">{planet.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{planet.population}</h6>
                <p className="card-text">{planet.diameter}</p>
            </div>

        </div>
    )


}