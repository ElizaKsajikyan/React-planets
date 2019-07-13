import React, {Component} from 'react';

import './Header.css';

export default class Header extends Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="../Nav">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">

                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav  navbar-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="../Home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../Planets">Planets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../Stars">Stars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../Persons">Persons</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}



