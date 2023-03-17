import React from "react";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import arrayJavaScript from "../../constants/javaScript/arrayJavaScript";
import Loader from "../common/Loader";
const ArraysInJavaScript = () => {
  const [javaScriptArr, setJavScriptArr] = useState(arrayJavaScript);
  const handleAccordian = (index) => {
    const tempArr = javaScriptArr;
    tempArr[index].show = "block";
    setJavScriptArr([...tempArr]);
  };
  return (
    <>
      <div className="container">
        <h1>JavaScript Array Method</h1>
        <Accordion>
          {javaScriptArr?.length ? (
            javaScriptArr?.map((item) => {
              return (
                <Accordion.Item eventKey={item?.id}>
                  <Accordion.Header onClick={() => handleAccordian(item?.id)}>
                    {item?.title}
                  </Accordion.Header>
                  <Accordion.Body style={{ display: `${item?.show}` }}>
                    <div className="row">{item?.description}</div>
                    <div className="row mt-3">
                      <strong>For Example: </strong>
                      <pre>{item?.example}</pre>
                    </div>
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

export default ArraysInJavaScript;
