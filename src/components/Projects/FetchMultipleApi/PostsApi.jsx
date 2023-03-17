import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/slices/jsonPlaceHolder";
import Loader from "../../common/Loader";
const PostsApi = () => {

  const dispatch= useDispatch()
  const posts= useSelector(state=> state?.jsonPlaceHolder?.posts);

  console.log("response at Posts: ", posts)
  useEffect(()=>{
    dispatch(getPosts())
  },[]);
  return (
    <div className="text-center mt-4">
      {
        posts? posts?.map(item=> <p>{item.title}</p>)
        :
        <Loader/>
      }
    
    </div>
  );
};

export default PostsApi;
