import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const {user,logOut} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid bg-warning">
                <Link className="navbar-brand" to="/services"><img src={logo} alt="" /> .DE </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <Link to="/home" className='nav-link text-black'>home</Link>
                        <Link to="/services" className='nav-link text-black'>Services</Link>
                        <Link to="/doctor" className='nav-link text-black'>DoctorPortal</Link>
                        <Link to="/admit" className='nav-link text-black'>Admit</Link>
                        <Link to="/career" className='nav-link text-black'>Career</Link>
                        <Link to="" className='nav-link text-black'>signed by as:<span style={{color:'blue'}}> {user.displayName}</span></Link>
                        
                        {
                            user.email ? <Link to="/login">

                                <button onClick={logOut} className="btn btn-warning me-2" >Log-out</button>
                            </Link>
                            :
                                <Link to="/login">
                                    <button className="btn btn-warning me-2" >Log In</button>
                                </Link>
                        }
                        
                        






                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;