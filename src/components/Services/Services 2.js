import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./facilities.json')
        .then(res =>res.json())
        .then (data=>{
            console.log(data);
            setServices(data);
        })
    },[])
    return (
        <div>
            <section  className="mt-5 container">
                
                <h2 className="text-center fw-bolder">Our <span style={{ color: 'goldenRod' }}>Facilities</span></h2>
                <h3 className="text-center">To contribute to positive change and achieve ourHealthcare Facilities Where Medical Professionals Provide Care  </h3>

                {/* render vehicles from server side */}
                <div className="row">
                    {
                        services.map(service => <Service ser ={service} ></Service>)
                      
                    }
                </div>
            </section>
        </div>
    );
};

export default Services;