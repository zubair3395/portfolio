import React from "react";
import Accordion from "react-bootstrap/Accordion";
import html from "../../constants/html";
import { useState } from "react";
import Loader from "../common/Loader";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
const Html = () => {
  const [htmlArr, setHtmlArr] = useState(html);
  const handleAccordian = (index) => {
    parseInt(index);
    const tempArr = htmlArr;
    tempArr[index].show = "block";
    setHtmlArr([...tempArr]);
  };
  return (
    <>
    
      <div className="container">
        <h1>HTML Tutorial</h1>
        <strong>
          Basics HTML tags are used in this project:{" "}
          <Link to={routes.projects.kompond}>Click Here</Link>{" "}
        </strong>
        <Accordion className="mt-3">
          {htmlArr?.length ? (
            htmlArr?.map((item) => {
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

export default Html;
