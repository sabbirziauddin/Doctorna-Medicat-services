import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>

            <div className="mb-5 col-lg-4 col-sm-6 ">
                <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">

                    </div>
                    <div className="card-body ">
                        <h5 className="card-title">Apply online</h5>
                        <p>MIS is an outstanding employer .take this opportunity and apply for these job with useState</p>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-center ">
                            
                            <Link className=" text-danger fw-bold" to="/home">Go on  </Link>
                            

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Career;