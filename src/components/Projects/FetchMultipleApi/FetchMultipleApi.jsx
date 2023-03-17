import React, { useState } from "react";
import Button from "../../common/Button";
import Hr from "../../common/Hr";
import PostsApi from "./PostsApi";
import TodoApi from "./TodoApi";
import UserApi from "./UserApi";

const FetchMultipleApi = () => {
  const [fetchApi, setFetchApi] = useState("Posts");
  const handleApi = (value) => {
    setFetchApi(value);
  };
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-md">
          <Button value="Posts" onClick={() => handleApi("Posts")} />
         {fetchApi==="Posts" && <Hr/>} 
        </div>
        <div className="col-md">
          <Button value="Users" onClick={() => handleApi("Users")} />
          {fetchApi==="Users" && <Hr/>} 
        </div>
        <div className="col-md">
          <Button value="Todos" onClick={() => handleApi("Todos")} />
          {fetchApi==="Todos" && <Hr/>} 
        </div>
      </div>
      {fetchApi === "Posts" && <PostsApi />}
      {fetchApi === "Users" && <UserApi />}
      {fetchApi === "Todos" && <TodoApi />}
    </div>
  );
};

export default FetchMultipleApi;
