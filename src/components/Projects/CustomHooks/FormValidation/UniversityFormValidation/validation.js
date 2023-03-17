export function validation(user) {
    let errors = {};
    if (!user.universityName) {
      errors.universityName = 'University Name is Required';
    }
    if (!user.areaOfStudy) {
      errors.areaOfStudy = 'Area of Study is required';
    } 
    if(!user.cgpa){
      errors.cgpa = 'cgpa is required';
    }
    if(!user.fromDate){
      errors.fromDate= " From  Date is required "
    }
    if(!user.expectedDate){
      errors.expectedDate= "Expected Date is required"
    }
    if(!user.qualification){
      errors.qualification= "Qualification is required"
    }
    return errors;
  }
  