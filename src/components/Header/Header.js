import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import banner from '../../images/banner.jpeg'
import DoctorPortal from '../DoctorPortal/DoctorPortal';
import Footer from '../Footer/Footer';


const Header = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data =>setData(data))
    },[])
    return (

        <div>
            <div className="row d-flex  align-items-center bg-secondary">
                <div className="col-lg-6 col-md-12">
                    <h2 className="text-black ">Welcome to the doctors portal</h2>
                    <h3>Find and book a medical appointment</h3>
                    <p className=" ">Here you will find information for your patients, about the clinics and institutes, further education and special services
                    </p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <img className="img-fluid" src={banner} alt="" />

                </div>
                <section>
                    <h1>Our <span style ={{color:'goldenRod'}}>facilites</span> </h1>
                </section>
                {
                    <div className="row">
                        {

                            /* services.map(service => <Service ser={service}></Service>) */
                            data.map(serv=> <Service ser ={serv}></Service>)

                        }
                    </div>
                }

            </div>
            <section>
                <h1>Special <span style={{ color: 'goldenRod' }}>Services</span> </h1>
                <DoctorPortal></DoctorPortal>





            </section>
            
            



        </div>
    );
};

export default Header;