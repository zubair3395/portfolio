import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/slices/jsonPlaceHolder";
import Loader from "../../common/Loader";
const PostsApi = () => {
  const dispatch= useDispatch()
  const posts= useSelector(state=> state?.jsonPlaceHolder?.posts);
  const isLoading =  useSelector(state=> state?.jsonPlaceHolder?.isLoading);
  console.log("loading Posts: ", isLoading)
  useEffect(()=>{
    dispatch(getPosts())
  },[]);
  return (
    <div className="text-center mt-4">
      {
        isLoading ? posts?.map(item=> <p>{item.title}</p>)
        :
        <Loader/>
      }
    
    </div>
  );
};

export default PostsApi;
