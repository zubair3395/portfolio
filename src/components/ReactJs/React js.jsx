import React from "react";
import { useState, lazy, Suspense } from "react";
import Button from "../common/Button";
import Loader from "../common/Loader";
const BasicTopics = lazy(() => import("./BasicTopics"));
const ReactHooks = lazy(() => import("./ReactHooks"));
const ReactRedux = lazy(() => import("./ReactRedux"));
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
            {reactSubject === "redux" && <hr className="w-25" />}
          </div>
          <div className="col-md">
            <Button onClick={() => handlePage("hooks")} value="React Hooks" />
            {reactSubject === "hooks" && <hr className="w-25" />}
          </div>
        </div>

        {reactSubject === "react" && (
          <Suspense fallback={<Loader />}>
            <BasicTopics />
          </Suspense>
        )}

        {reactSubject === "hooks" && (
          <Suspense fallback={<Loader />}>
            <ReactHooks />
          </Suspense>
        )}

        {reactSubject === "redux" && (
          <Suspense fallback={<Loader />}>
            <ReactRedux />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default ReactJs;
