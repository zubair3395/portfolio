import React, { useState } from "react";
import {useForm} from "../../FormValidation/UniversityFormValidation/useForm";
import { validation } from "../../FormValidation/UniversityFormValidation/validation";
import UniversityTable from "./UniversityTable";
const UniversityForm = () => {
    const { handlegetData, submitData, uniStd, error, uniStdArr, setUniStdArr} = useForm(validation)
  const [univerity, setUniversity] = useState("pakistan");
  const [cgpa, setCgpa] = useState(null);
  const handleCGPA = (e) => {
    let {value, name} = e.target
      handlegetData({target: {value:value, name:name}})
    if(value>0 && value<=4){
        setCgpa(value);
    } 
    else {
      setCgpa(value.substring(0,value.length-1))
    }
  };
  const handlePakistan = () => {
    setUniversity("pakistan");
  };
  const handleInternational = () => {
    setUniversity("international");
  };
  return (
    <div className="mx-5">
      <h1 className="m-0">University</h1>
      <div className="form-check form-check-inline my-5">
        <input
          className="form-check-input"
          type="radio"
          name=""
          onClick={handlePakistan}
          checked={univerity === "pakistan" ? true : false}
        />
        <label className="form-check-label" htmlFor="">
          Pakistan
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name=""
          onClick={handleInternational}
          checked={univerity === "international" ? true : false}
        />
        <label className="form-check-label" htmlFor="">
          International
        </label>
      </div>
      <div className="row">
        <div className="col-md-4">
        {univerity === "pakistan" ? (
        <div>
        <select className="form-select my-2" name="universityName" value={uniStd?.universityName} onChange={ handlegetData}>
          <option value="university">University</option>
          <option value="University2">Pu</option>
          <option value="University3">IUB</option>
        </select>
        { error.universityName && <p className="text-danger">{error?.universityName}</p>}
        </div>
      ) : (
        <div>
        <input
          type="text"
          className="form-control my-2"
          placeholder="University"
          name="universityName"
          value={uniStd?.universityName}
          onChange={handlegetData}
        />
         { error?.universityName && <p className="text-danger">{error?.universityName}</p>}
        </div>
      )}
      <select className="form-select my-2" onChange={ handlegetData} name="qualification" value={uniStd?.qualification}>
        <option>Qualification</option>
        <option value="BSc">Bsc</option>
        <option value="BsCS">BsCs</option>
      </select>
      { error?.qualification && <p className="text-danger">{error?.qualification}</p>}
      <select className="form-select my-2" onChange={handlegetData} name="areaOfStudy" value={uniStd?.areaOfStudy}>
        <option selected>Area of Study</option>
        <option value="ist">IST</option>
        <option value="bwp">bwp</option>
      </select>
      { error?.areaOfStudy && <p className="text-danger">{error?.areaOfStudy}</p>}
      <input
        type="number"
        className="form-control my-2"
        placeholder="Enter your CGPA"
        value={cgpa}
        name="cgpa"
        onChange={handleCGPA}
      />
       { error?.cgpa && <p className="text-danger">{error?.cgpa}</p>}
      <label htmlFor="">From Date</label>
      <input type="date" className="form-control my-2" name="fromDate" value={uniStd?.fromDate} onChange={ handlegetData}/>
      { error?.fromDate && <p className="text-danger">{error?.fromDate}</p>}
      <label htmlFor="">Expected</label>
      <input type="date" className="form-control my-2" name="expectedDate" value={uniStd?.expectedDate} onChange={ handlegetData}/>
      { error?.expectedDate && <p className="text-danger">{error?.expectedDate}</p>}
      <button className="btn btn-success my-3" onClick={submitData}>Save</button>
        </div>
        <div className="col-md-8">
           <UniversityTable uniStdArr={uniStdArr} setUniStdArr={setUniStdArr}/>
        </div>
      </div>
     
    </div>
  );
};

export default UniversityForm;
