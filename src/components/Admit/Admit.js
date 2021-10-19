import React from 'react';
import banner from '../../images/birth.jpeg'

const Admit = () => {
    return (
        <div className="row d-flex  align-items-center ">
            <div className="col-lg-6 col-md-6">
                <img className="img-fluid" src={banner} alt="" />

            </div>
            <div className="col-lg-6 col-md-12">
                <form className="row g-3">
                    <h1>Registration form</h1>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">optional address</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label class ="form-check-label" for="gridCheck">
                            Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Admit;