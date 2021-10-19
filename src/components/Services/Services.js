import React, { useEffect, useState } from 'react';
import DoctorPortal from '../DoctorPortal/DoctorPortal';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res =>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div>
            <section className="mt-5 container">

                <h2 className="text-center fw-bolder">Our <span style={{ color: 'goldenRod' }}>Facilities</span></h2>
                <h3 className="text-center">To contribute to positive change and achieve ourHealthcare Facilities Where Medical Professionals Provide Care  </h3>

                {/* render vehicles from server side */}
                <div className="row">
                    {
                      services.map(serv =><Service ser ={serv}></Service>)

                    }
                </div>
            </section>
        </div>
    );
};

export default Services;