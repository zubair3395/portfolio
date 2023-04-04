import React from "react";
import reactRedux from "../../constants/react/reactRedux";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import Loader from "../common/Loader";
const ReactRedux = () => {
  const [reactReduxArr, setReactReduxArr] = useState(reactRedux);
  const handleAccordian = (index) => {
    parseInt(index);
    const tempArr = reactReduxArr;
    tempArr[index].show = "block";
    setReactReduxArr([...tempArr]);
  };
  return (
    <div className="container">
      <h1>React Redux</h1>
      <strong>
        Example of React Redux is:{" "}
        <Link to={routes.projects.shopping}>Click Here</Link>{" "}
      </strong>
      <Accordion className="mt-3">
        {reactReduxArr?.length ? (
          reactReduxArr?.map((item) => {
            return (
              <Accordion.Item eventKey={item?.id}>
                <Accordion.Header onClick={() => handleAccordian(item.id)}>
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
  );
};

export default ReactRedux;
