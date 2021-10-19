import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import loginImg from '../../images/login.jpeg'

const Login = () => {
   const { signInWithGoogle} =useAuth()
    return (
        <div className=" container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-8 d-none d-md-block">
                    <img className="img-fluid" src={loginImg} alt="" />
                </div>
                <div className="col-md-4 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button onClick={signInWithGoogle} className="btn btn-primary" >Google Sign in</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;