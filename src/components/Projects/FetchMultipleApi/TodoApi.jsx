import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos} from "../../../Redux/slices/jsonPlaceHolder";
import Loader from "../../common/Loader";
const TodoApi = () => {
  const dispatch= useDispatch();
   const todos= useSelector(state=> state?.jsonPlaceHolder?.todos);
   const isLoading =  useSelector(state=> state?.jsonPlaceHolder?.isLoading);
   console.log("loading tosdo: ", isLoading)
   useEffect(()=>{
    dispatch(getTodos())
   },[]);
  return (
    <div className="text-center mt-4">
      {
        isLoading ? todos?.map(item=> <p>{item?.title}</p>)
        :
        <Loader/>
      }
    </div>
  );
};

export default TodoApi;
