import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {f_id,name,img,desc,price} =props.ser;
    return (

        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={img} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">service:{name}</h5>
                    <p>{desc}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-danger fw-bold">$ {price}</h3>
                        <Link to={`/addService/${f_id}`}>
                            <button className ="btn btn-primary">Add service</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;