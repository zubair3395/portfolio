import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "../../../config/routes";
import { getUserData, setUserData } from "../../../Redux/slices/authenticationSlice";
import InputField from "../../common/InputField";
import useForm from "./useForm/useForm";
import { validation } from "./useForm/validation";

const Signup = () => {
  const navigate = useNavigate();
  const disptach= useDispatch();
  const { handleChange, user, getError, error } = useForm(validation);
 
    const existingUser= useSelector(state=> state?.authentication?.userData);
  useEffect(() => {
   disptach(getUserData());
  }, []);

  const handleSingup = async () => {
    getError();

    let isvaild = true;

    const validate = validation(user);

    Object.values(validate).forEach((value) => {
      if (value) {
        console.log("validate: ", value);
        isvaild = false;
      }
    });
    const tempUser = existingUser.find(
      (singleUser) => singleUser?.email === user?.email
    );

    if (isvaild) {
      if (!tempUser) {
        disptach(setUserData(user))

        toast("Your data sucefully saved");
        localStorage.setItem("name", JSON.stringify(user?.name));
        navigate(routes?.default?.path);
      } else {
      toast("email is already exist");
    }
  }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3">
            <div
              className="cards text-white"
              style={{
                backgroundColor: "gray",
                borderRadius: "1rem",
              }}
            >
              <div className="card-body p-5 ">
                <h2 className="fw-bold mb-2 text-uppercase text-center">
                  SignUp
                </h2>
                <p className="text-white text-center">
                  Please enter your Data!
                </p>

                <div className="form-outline form-white mb-4">
                  <label className="form-label">Name</label>
                  <InputField
                    type="text"
                    placeholder="Enter your Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                  {error.name && <p className="text-danger">{error?.name}</p>}
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typeEmailX">
                    Email
                  </label>
                  <InputField
                    type="email"
                    value={user.email}
                    name="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                  />
                  {error.email && <p className="text-danger">{error?.email}</p>}
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" for="typePasswordX">
                    Password
                  </label>
                  <InputField
                    type="password"
                    value={user.password}
                    name="password"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                  />
                  {error.password && (
                    <p className="text-danger">{error.password}</p>
                  )}
                </div>

                <button
                  className={
                    !user.email
                      ? "btn btn-danger btn-lg px-5"
                      : "btn btn-outline-light btn-lg px-5"
                  }
                  type="submit"
                  onClick={handleSingup}
                >
                  SignUp
                </button>
                <p>
                  Already have an account?{" "}
                  <Link to={routes.authentication.login} className=" fw-bold text-white">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
