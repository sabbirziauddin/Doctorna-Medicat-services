import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Card = () => {
    const {id} = useParams()
    console.log(id);
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
    const matchedItem = data.filter (pd =>pd.f_id===id);
    console.log(matchedItem);
    return (
        
        <div className=" d-flex justify-content-center align-items-center mt-5 ">
            <div className="mb-5 col-lg-4 col-sm-6  justify-content-center align-items-center">
                <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
                    <div className="d-flex justify-content-center align-items-center h-75 p-2">
                        <img src={matchedItem[0]?.img} className="card-img-top h-75 w-75" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{matchedItem[0]?.name}</h3>
                        <h5 className="card-title">{matchedItem[0]?.desc}</h5>

                    </div>
                    <div className="card-footer">
                        <div className="d-flex align-items-center justify-content-between ">
                            <h3 className="text-danger fw-bold">${matchedItem[0]?.price} </h3>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;