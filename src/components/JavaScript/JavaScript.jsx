import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import javaScript from "../../constants/javaScript/javaScript";
import Loader from "../common/Loader";

const JavaScript = () => {
  const [javaScriptArr, setJavScriptArr] = useState(javaScript);
  const handleAccordian = (index) => {
    parseInt(index);
    const tempArr = javaScriptArr;
    tempArr[index].show = "block";
    setJavScriptArr([...tempArr]);
  };
  return (
    <>
      <div className="container">
        <h1>JavaScript</h1>
        <strong>
          Differnt Math functions are used in this:{" "}
          <Link to={routes.projects.footBall}>Click Here</Link>{" "}
        </strong>
        <Accordion className="mt-3">
          {javaScriptArr?.length ? (
            javaScriptArr?.map((item) => {
              return (
                <Accordion.Item eventKey={item?.id}>
                  <Accordion.Header onClick={() => handleAccordian(item?.id)}>
                    {item?.title}
                  </Accordion.Header>
                  <Accordion.Body style={{ display: `${item?.show}` }}>
                    {item?.description}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })
          ) : (
            <Loader />
          )}
        </Accordion>
      </div>
    </>
  );
};

export default JavaScript;
