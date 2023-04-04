import React, { useState } from 'react'
import ArraysInJavaScript from './ArraysInJavaScript';
import JavaScriptTopic from './JavaScriptTopic';
import Button from '../common/Button';
const JavaScript = () => {
    const [subject, setSubject] = useState("javaScript");
    const handlePage=(text)=>{
         setSubject(text)
    }

  return (
    <>
      <div className="container">
      <div className="row mt-5 mb-4">
          <div className="col-md">
            <Button onClick={() => handlePage("javaScript")} value="JavaScript Method" />
            {subject === "javaScript" && <hr className="w-25" />}
          </div>
          <div className="col-md">
            <Button onClick={() => handlePage("arrayJavaScript")} value="Array method " />
            {subject === "arrayJavaScript" && <hr className="w-25" />}
          </div>
        </div>
      </div>
      {
        subject=== "javaScript" && <JavaScriptTopic/>
      }
      {
        subject=== "arrayJavaScript" && <ArraysInJavaScript/>
      }
    </>
  )
}

export default JavaScript
