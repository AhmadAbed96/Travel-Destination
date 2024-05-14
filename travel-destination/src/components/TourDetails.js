import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const citiesData = require("./data/data.json")


function TourDetails() {
    // const [dataCity , setDataCity] = useState()
    const params = useParams();
    // if (params?.id) {
    //     console.log(params.id);
    const cityData = citiesData?.find((city) => city?.id == params?.id)
    // setDataCity(cityData)
    // console.log(cityData);
    // }
    return (


        <>
            <div className="container mt-5 min-vh-100">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            {" "}
                                            <img
                                                id="main-image"
                                                src={cityData?.image}
                                                width={300}
                                            />{" "}
                                        </div>
                                        <div className="thumbnail text-center">
                                            {" "}
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        
                                        <div className="mt-4 mb-3">
                                            {" "}
                                            <span className="text-uppercase text-muted brand">{cityData?.name}</span>
                                            
                                        </div>
                                        <p className="about">
                                            {cityData?.info}
                                        </p>
                                   
                                            <i className="fa fa-heart text-muted" />{" "}
                                            <i className="fa fa-share-alt text-muted" />{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default TourDetails