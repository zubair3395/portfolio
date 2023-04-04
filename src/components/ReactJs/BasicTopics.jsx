import React from "react";
import reactTopics from "../../constants/react/reactTopics";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";
import routes from "../../config/routes";

const BasicTopics = () => {
  const [reactTopicArr, setReactTopicArr] = useState(reactTopics);
  
  const handleAccordian = (index) => {
    parseInt(index)
    const tempArr = reactTopicArr;
    tempArr[index].show = "block";
    setReactTopicArr([...tempArr]);
  };
  
  return (
    <> 
       
      <div className="container">
         <h1>Basic Topics of React js</h1>
         <strong>Example of React Props and Components are: <Link to={routes.projects.formValidation}>Click Here</Link> </strong>
         <Accordion className="mt-3">
           {reactTopicArr?.length ? (
             reactTopicArr?.map((item) => {
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
            <Loader/>
           
           )}
         </Accordion>
      </div>
    </>
  );
};

export default BasicTopics;
