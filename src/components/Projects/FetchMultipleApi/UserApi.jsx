import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/slices/jsonPlaceHolder";
import Loader from "../../common/Loader";

const UserApi = () => {
  const disptach= useDispatch();
  const user= useSelector(state=> state?.jsonPlaceHolder?.users);
  const isLoading =  useSelector(state=> state?.jsonPlaceHolder?.isLoading);
  console.log("loading users: ", isLoading)
  useEffect(()=>{
    disptach(getUsers())
  },[])
  return (
    <div className="text-center mt-4">
      {
        isLoading ? user?.map(item=> <p>{item.name}</p>)
        :
        <Loader/>
      }
    </div>
  );
};

export default UserApi;
