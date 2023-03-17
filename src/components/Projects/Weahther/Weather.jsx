import React, { useEffect, useState } from "react";
import Loader from "../../common/Loader";
import {useDispatch, useSelector} from  "react-redux";
import { getWeatherData } from "../../../Redux/slices/weatherSlice";
import InputField from "../../common/InputField";
const Weather = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("Lahore");

  const date = new Date();

  useEffect(() => {
    dispatch(getWeatherData(city));
  }, []);

  const handleChange=(e)=>{
    setCity(e.target.value);
  }
  const weatherInfo= useSelector(state=> state?.weatherSlice?.weatherData);


  return (
    <section className="vh-100" style={{ backgroundColor: "#4B515D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
      
          <div className="col-md-8 col-lg-6 col-xl-4">
          <h1 className="text-white">Weather Forcast App</h1>
          <InputField type="text" onChange={handleChange}/>
          <button className="btn btn-info my-2" onClick={()=> dispatch(getWeatherData(city))}> Search </button>
            <div
              className="card"
              style={{ color: "#4B515D", borderRadius: "35px" }}
            >
                {
                 weatherInfo.length===0? <Loader/> :  <div className="card-body p-4">
                 <div>
                   <h1>{weatherInfo?.name}</h1>
                 </div>
                 <div className="d-flex">
                   <h6 className="flex-grow-1"></h6>
                   <h6>
                     {date.getHours()} : {date.getMinutes()}
                   </h6>
                 </div>
                 <div className="d-flex">
                   <h6 className="flex-grow-1"></h6>
                   <h6>
                     {date.getDate()}, {date.getMonth()+1}, {date.getFullYear()}
                   </h6>
                 </div>
 
                 <div className="d-flex flex-column text-center mt-5 mb-4">
                   <h6
                     className="display-4 mb-0 font-weight-bold"
                     style={{ color: "#1C2331" }}
                   >
                     {" "}
                     {weatherInfo?.main?.temp}°C{" "}
                   </h6>
                   <span className="small" style={{ color: "#868B94" }}>
                     {weatherInfo?.weather[0]?.description}
                   </span>
                 </div>
 
                 <div className="d-flex align-items-center">
                   <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                     <div>
                       <i
                         className="fas fa-wind fa-fw"
                         style={{ color: "#868B94" }}
                       ></i>{" "}
                       <span className="ms-1"> {weatherInfo?.wind?.speed} km/h</span>
                     </div>
                     <div>
                       <i
                         className="fas fa-tint fa-fw"
                         style={{ color: "#868B94" }}
                       ></i>{" "}
                       <span className="ms-1">
                         {" "}
                         {weatherInfo?.main?.humidity} %{" "}
                       </span>
                     </div>
                     <div>
                       <i
                         className="fas fa-sun fa-fw"
                         style={{ color: "#868B94" }}
                       ></i>{" "}
                       <span className="ms-1"> 0.2h </span>
                     </div>
                   </div>
                   <div className="mx-5">
                     <p>Max temp: {weatherInfo?.main?.temp_max}</p>
                     <p>Min Temp: {weatherInfo?.main?.temp_min}</p>
                   </div>
                   <div>
                     <img
                       src={
                         weatherInfo?.main?.temp > 35
                           ? "https://www.worldatlas.com/r/w1200/upload/50/d4/a6/shutterstock-84203080.jpg"
                           : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                       }
                       width="100px"
                     />
                   </div>
                 </div>
               </div>
                }
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
