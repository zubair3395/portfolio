import { useState } from "react";

const useForm = (validation) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  const getError = () => {
    setError(validation(user));
  };

  return { handleChange, user, error, getError };
};
export default useForm;
