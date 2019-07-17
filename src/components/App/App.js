import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService'
import Header from '../Header';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.css';

export default class App extends Component {
    state = {
        id: null,
        starId:null,
        removeShow: true
    };
    result = new SwapiService();

    // componentDidMount() {
    //     this.getFirstPlanetId()
    // }
    //
    // getFirstPlanetId = async () => {
    //     const planet = await this.result.getPlanets();
    //     this.setState({
    //         id: planet[0].id
    //     })
    // }

    getItem = async (id) => {
        let idPlanet = id;
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
    getStarId=(id)=>{
        this.setState({
            starId: id
        });
    }

    onStarData = () => {
        // const {starId} = this.state;
    }
    render() {
        console.log(this.state.id);
        const {removeShow,starId} = this.state;
        const showContent = removeShow ? <Slider/> : null;

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
                        this.getItem} getStarId={this.getStarId}/>
                    <Main planetId={this.state.id} starId={starId} metpd={(data)=>{
                        this.onStarData(data)
                    }}/>
                </div>
            </div>
        );
    }
}
