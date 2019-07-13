import React,{Component} from 'react';

import Header from '../Header';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import Main from '../Main';

import './App.css';
import { async } from 'q';

export default class App extends Component{
    state={
        id:3,
        removeShow:true
    }
   getItem =(id)=>{

    this.setState({
        id
    });
    }
    showPlanet = true;
    removePlanet = () => {
        this.showPlanet = !this.showPlanet;
        this.setState({
            removeShow: this.showPlanet
        })
    }
    render() {
        const{removeShow} =this.state;
        const showContent = removeShow ?  <Slider/> : null;

        return (
            <div className="App wrapper">
                <header className="App-header">
                    <Header/>
                </header>
                <div className='mt-5'>
                    <button className='btn btn-default' onClick={this.removePlanet}>change</button>
                    {showContent}                </div>
                <div className="d-flex align-items-start">
                    <Sidebar planet={
                        this.getItem}/>
                    <Main planetId={this.state.id}/>
                </div>
            </div>
        );
    }
}
