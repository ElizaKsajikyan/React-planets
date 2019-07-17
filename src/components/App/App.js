import React, {Component} from 'react';
import SwapiService from '../../services/SwapiService'
import Header from '../Header';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.css';

export default class App extends Component {
    state = {
        id: 3,
        starId: 3,
        removeShow: true,
        oldId: null,
        change:false
    };
    result = new SwapiService();


    getItem = async (id) => {
        this.setState({
            starId: id
        });
    };
    showPlanet = true;
    removePlanet = () => {
        this.showPlanet = !this.showPlanet;
        this.setState({
            removeShow: this.showPlanet
        })
    };
    getStarId = async (id) => {
        let starId = id;
        await  this.setState({
            oldId: this.state.starId,
            starId: starId,
            change:true
        })

    };

    onStarData = (metod) => {
        console.log(this.state.starId)
        metod(this.state.starId)
        // const {starId} = this.state;

    }

    // update = () => {
    //     const {starId, oldId} = this.state;
    //     console.log(this.state.oldId, this.state.starId)
    //     if (oldId===null || oldId !== starId) {
    //         return (
    //             <Main planetId={this.state.id} starId={starId} metpd={ this.onStarData}/>
    //         )
    //     }
    // }

    render() {
        const     update = () => {
            const {starId, oldId} = this.state;
            if (oldId !== starId) {
                console.log(oldId, starId)
                return (
                    <Main planetId={this.state.id} starId={starId} metpd={ this.onStarData}/>
                )
            }
        }
        const {removeShow} = this.state;
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
                    <Sidebar getStarId={this.getStarId}/>
                    {update()}
                </div>
            </div>
        );
    }
}
