import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService'
import Header from '../Header';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.css';

export default class App extends Component {
    state = {
        id: '',
        removeShow: true
    };
    result = new SwapiService();

    componentDidMount() {
        this.getFirstPlanetId()
    }

    getFirstPlanetId = async () => {
        const planet = await this.result.getPlanets();
        this.setState({
            id: planet[0].id
        })
    }

    getItem = async (id) => {
        let idPlanet = await id;
        this.setState({
            id: idPlanet
        });
    };
    showPlanet = true;
    removePlanet = () => {
        this.showPlanet = !this.showPlanet;
        this.setState({
            removeShow: this.showPlanet
        })
    };

    render() {
        const {removeShow} = this.state;
        const showContent = removeShow ? <Slider/> : null;
        const main = this.state.id ?  <Main planetId={this.state.id}/>: ''
        return (
            <div className="App wrapper">
                <header className="App-header">
                    <Header/>
                </header>
                <section className='my-3 container'>
                    <button className='btn btn-worning mb-3' onClick={this.removePlanet}>change</button>
                    <article className="d-flex border rounded shadow align-items-center p-3">
                        {showContent}
                    </article>
                </section>
                <div className="d-flex align-items-start container">
                    <Sidebar planet={
                        this.getItem}/>
                    {main}
                </div>
            </div>
        );
    }
}
