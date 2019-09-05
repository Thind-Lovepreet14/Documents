import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="container justify-content-end navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><i className="flaticon-gym"></i></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ml-auto">
                            
                                <li className="nav-item hover">
                                {/* <Link className="navbar-brand" to='/'> */}
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                    {/* </Link> */}
                                </li>
                                
                                <li className="nav-item hover">
                                {/* <Link className="navbar-brand" to='/product'> */}
                                    <a className="nav-link" href="/product">Product</a>
                                {/* </Link> */}
                                </li>
                                <li className="nav-item hover">
                                {/* <Link className="navbar-brand" to='/contact'> */}
                                    <a className="nav-link" href="/contact">Contact</a>
                                {/* </Link> */}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                        
            </div>
            
        )
    }
}

export default Navbar;