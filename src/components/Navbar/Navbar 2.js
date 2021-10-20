import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import Career from '../Career/Career';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid bg-warning">
                <a className="navbar-brand" href="#"><img src={logo} alt=""/> </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to="/home" className= 'nav-link'>Home</Link>
                        <Link to="/services" className= 'nav-link'>Services</Link>
                        <Link to="/doctor" className= 'nav-link'>DoctorPortal</Link>
                        <Link to="/admit" className= 'nav-link'>Admit</Link>
                        <Link to="/career" className= 'nav-link'>Career</Link>
                        <Link to="/login">
                            <button  className="btn btn-warning me-2" >Log-out</button>
                        </Link>
                        <Link to="/login">
                            <button className="btn btn-warning me-2" >Log In</button>
                        </Link>

                        

                       


                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;