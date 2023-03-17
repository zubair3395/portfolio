import React from "react";

function UniversityTable({ uniStdArr , setUniStdArr}) {

    const handleRemove= (index)=>{
        const temArr = uniStdArr.filter(item=> uniStdArr.indexOf(item)!==index)
        setUniStdArr(temArr);
    }
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">University Name</th>
            <th scope="col">Qualification</th>
            <th scope="col">Area of Study</th>
            <th scope="col">CGPA</th>
            <th scope="col">From Date</th>
            <th scope="col">Expected Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {uniStdArr?.map((elemment, index) => (
            <tr key={index}>
              <th>{elemment?.id}</th>
              <td>{elemment?.universityName}</td>
              <td>{elemment?.qualification}</td>
              <td>{elemment?.areaOfStudy}</td>
              <td>{elemment?.cgpa}</td>
              <td>{elemment?.fromDate}</td>
              <td>{elemment?.expectedDate}</td>
              <td><button className="btn btn-success" onClick={()=> handleRemove(index)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UniversityTable;
