import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService'
import Loading from './../Loading'


import './Sidebar.css';

export default class Sidebar extends Component {
    componentDidMount() {
        this.getPlanets();
        this.getStars()
    }

    _swapiService = new SwapiService();

    result = new SwapiService();

    state = {
        planets: [],
        stars:[],
        id: null,
        isLoading: true,
    };
    getPlanets = async () => {
        const planets = await this._swapiService.getPlanets();
        this.setState({
            planets,
            isLoading:false
        })
    };
    getPlanetId = (id) => {
        this.setState(id);
        return this.props.planet(id)
    };

    getStars=async ()=>{
        const stars = await this._swapiService.getStars();
        this.setState({
            stars,
            isLoading:false
        })
    }
    getPlanetsItems = () => {
        const {planets} = this.state;
        if (planets.length) {
            return planets.map((planet, i) => {
                let classes = "list-group-item d-flex justify-content-between align-items-center";
                const activeClass = !i  ? ' active' : '';
                classes += activeClass;
                return (
                    <li className={classes} key={planet.id} onClick={() => {
                        this.props.planet(planet.id)
                    }}>
                        {planet.name}
                    </li>
                )
            })
        } else {
            return null
        }
    };
    getStarsItem= () => {
        const {getStarId}=this.props
        const {stars} = this.state;
        if (stars.length) {
            return stars.map((star, i) => {
                let classes = "list-group-item d-flex justify-content-between align-items-center";
                const activeClass = !i  ? ' active' : '';
                classes += activeClass;
                return (
                    <li className={classes} key={star.id} onClick={()=>{
                        getStarId(star.id)
                    }}>
                        {star.name}
                    </li>
                )
            })
        } else {
            return null
        }
    };

    render() {
        const {isLoading} =this.state;
        const loading = isLoading ? <Loading/> : this.getStarsItem();

        return (
            <div className='col-md-3'>
                <ul className="list-group">
                    {loading}
                </ul>
            </div>
        )
    }
};
