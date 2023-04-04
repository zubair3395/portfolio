import React from "react";
import reactHooks from "../../constants/react/reactHooks";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import Loader from "../common/Loader";
const ReactHooks = () => {
  const [reactHooksArr, setReactHooksArr] = useState(reactHooks);
  const handleAccordian = (index) => {
    parseInt(index);
    const tempArr = reactHooksArr;
    tempArr[index].show = "block";
    setReactHooksArr([...tempArr]);
  };

  return (
    <div className="container">
      <h1>React Hooks</h1>
      <strong>
        Example of React hooks are:{" "}
        <Link to={routes.projects.musicApp}>Click Here</Link>{" "}
      </strong>
      <Accordion className="mt-3">
        {reactHooksArr?.length ? (
          reactHooksArr?.map((item) => {
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

export default ReactHooks;
