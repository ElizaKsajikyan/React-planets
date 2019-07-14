import React, {Component} from 'react';

import Header from '../Header';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.css';

export default class App extends Component {
    state = {
        id: 3,
        removeShow: true
    };
    getItem = async(id) => {
        let idPlanet= await id;
        this.setState({
            id:idPlanet
        });
        // console.log(this.state.id,"id")
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
                    <Main planetId={this.state.id}/>
                </div>
            </div>
        );
    }
}
