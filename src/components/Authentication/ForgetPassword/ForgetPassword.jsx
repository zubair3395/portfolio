import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";
import { forgetPassword, getUserData } from "../../../Redux/slices/authenticationSlice";
import InputField from "../../common/InputField";
import useForm from "./useForm/useFom";
import { validation } from "./useForm/validation";
import {toast} from "react-toastify";
const ForgetPassword = () => {
  const { handleChange, user, error, getError } = useForm(validation);

  const dispatch= useDispatch();

  const userData = useSelector(state=> state?.authentication?.userData);

  useEffect(() => {
     dispatch(getUserData());
   
  }, [user.email]);

  const handleSubmit = async() => {
    const { email, password, confirmPassword } = user;
    getError();
    let isvalid = true;
    const validate = validation(user);

    Object.values(validate).forEach((values) => {
      if (values) {
        isvalid = false;
      }
    });

    const validUser = userData.find((singleUser) => singleUser.email === email);
    if (isvalid) {
      if(validUser){
        dispatch(forgetPassword({id:validUser.id, password: password}));
        toast("password succesfully reset");
      }
      else {
        toast("Oops user does not exist")
      }
        
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-3">
            <div
              className="cards text-white"
              style={{
                backgroundColor: "gray",
                borderRadius: "1rem",
                color: "white",
              }}
            >
              <div className="card-body p-5 ">
                <h2 className="fw-bold mb-2 text-uppercase text-center">
                  Forget Password
                </h2>
                <p className=" text-center">Forget Password</p>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typeEmailX">
                    Email
                  </label>
                  <InputField
                    type="email"
                    name="email"
                    value={user?.email}
                    placeholder="Enter your Email"
                    onChange={handleChange}
                  />
                  {error?.email && (
                    <p className="text-danger">{error?.email}</p>
                  )}
                </div>

                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typePasswordX">
                    Password
                  </label>
                  <InputField
                    type="password"
                    value={user?.password}
                    name="password"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                  />
                  {error?.password && (
                    <p className="text-danger">{error?.password}</p>
                  )}
                </div>
                <div className="form-outline form-white mb-4">
                  <label className="form-label" htmlFor="typePasswordX">
                    Confirm Password
                  </label>
                  <InputField
                    type="password"
                    value={user?.confirmPassword}
                    name="confirmPassword"
                    placeholder="Enter again Password"
                    onChange={handleChange}
                  />
                  {error?.confirmPassword && (
                    <p className="text-danger">{error?.confirmPassword}</p>
                  )}
                </div>

                <button
                  className={"btn btn-danger btn-lg px-5 mt-3"}
                  type="button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <p className="mt-2">
                  Login? <Link to={routes.authentication.login} className='text-white fw-bold'>Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
