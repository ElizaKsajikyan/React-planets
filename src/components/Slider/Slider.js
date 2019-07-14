import React, {Component} from 'react';
import Loading from './../Loading'
import './Slider.css';
import SwapiService from '../../services/SwapiService';

export default class Slider extends Component {
    constructor() {
        super();
        this._isMounted = false;
    }

    componentDidMount() {
        setInterval(() => {
            this.getRandomPlanet()
        }, 5000);
        this._isMounted = true;
    }

    result = new SwapiService();

    state = {
        id: null,
        planet: {},
        planets: this.result.getPlanets(),
        isLoading: true,
        isError: true,
    };

    getRandomPlanet = async () => {
        if (this._isMounted) {
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

        }
    };


    componentWillUnmount() {
        this._isMounted = false;
        console.log('componentWillUnmount()')
    }

    render() {
        const {planet, id, isLoading, isError} = this.state;
        const d = !(isError && isLoading);
        const loading = isLoading ? <Loading/> : null;
        const content = d && !isError ? <RandomPlanet planet={planet} id={id}/> : null;


        return (
            <div>
                {loading}
                {content}
            </div>
        )
    }

};


const RandomPlanet = ({planet, id}) => {
    return (
        <div className="d-flex">
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="Card"/>
            <div className="card-body mr-2">
                <h4 className="card-title">{planet.name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{planet.population}</h6>
                <p className="card-text">{planet.diameter}</p>
            </div>

        </div>
    )


}