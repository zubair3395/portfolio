import { useState } from "react";
export const useForm = (validation) => {
  const [uniStd, setUniStd] = useState({
    universityName: "",
    qualification: "",
    areaOfStudy: "",
    cgpa: "",
    fromDate: "",
    expectedDate: "",
  });
  const [uniStdArr, setUniStdArr] = useState([]);
  const [error, setError] = useState({});
  const handlegetData = (event) => {
    setUniStd({ ...uniStd, [event.target.name]: event.target.value });
  };
  const submitData = (event) => {
    event.preventDefault();
    let isValid = true;
     let validate= validation(uniStd);
     setError(validate)
        console.log("validate: ", validate)
      Object.keys(validate)?.forEach((keys) => {
        if (validate[keys]) {
          isValid = false;
        }
      })

      if(isValid) {
        alert("Form Sucessfully Saved");
        uniStdArr.push(uniStd);
        setUniStd({
          id: "",
          universityName: "",
          qualification: "",
          areaOfStudy: "",
          cgpa: "",
          fromDate: "",
          expectedDate: "",
        });
        setError({
          id: "",
        });
      }
  };
  return { handlegetData, submitData, uniStd, error, uniStdArr, setUniStdArr };
};
