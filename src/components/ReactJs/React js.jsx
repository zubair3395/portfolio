import React from "react";
import { useState } from "react";
import Button from "../common/Button";
import BasicTopics from "./BasicTopics";
import ReactHooks from "./ReactHooks";
import ReactRedux from "./ReactRedux";

const ReactJs = () => {
  const [reactSubject, setReactSuject] = useState("react");
  const handlePage = (subject) => {
    setReactSuject(subject);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-4">
          <div className="col-md">
            <Button onClick={() => handlePage("react")} value="React Topic" />
            {reactSubject === "react" && <hr className="w-25" />}
          </div>
          <div className="col-md">
            <Button onClick={() => handlePage("redux")} value="React Redux" />
            {reactSubject === "redux" && <hr className="w-25"/>}
          </div>
          <div className="col-md">
            <Button onClick={() => handlePage("hooks")} value="React Hooks" />
            {reactSubject === "hooks" && <hr className="w-25" />}
          </div>
        </div>

        {reactSubject === "react" && <BasicTopics />}

        {reactSubject === "hooks" && <ReactHooks />}

        {reactSubject === "redux" && <ReactRedux />}
      </div>
    </>
  );
};

export default ReactJs;
