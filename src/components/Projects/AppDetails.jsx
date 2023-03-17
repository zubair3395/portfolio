import React from "react";
import appDetail from "../../constants/appDetail";
import { Link } from "react-router-dom";
const AppDetails = () => {
  return (
    <div className="container">
      <h1> Here are some apps that I have build</h1>
      {appDetail?.map((item) => (
        <div className="row my-3 bg-info p-5 rounded-5" key={item?.id}>
          <div className="col-md-4">
            <img src={item.src} alt="calculator" style={{width:"100px", height:"100px", borderRadius:"15px"}}/>
          </div>
          <div className="col-md-4">
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
          </div>
          <div className="col-md-4">
            <Link to={item?.path} className="btn btn-primary">View</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppDetails;
