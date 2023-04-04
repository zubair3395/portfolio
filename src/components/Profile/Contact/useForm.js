import { useState } from "react";

const useForm = (validation) => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [error, setError] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  const getError = () => {
    setError(validation(users));
  };
  return { handleChange, users, error, getError };
};
export default useForm;
