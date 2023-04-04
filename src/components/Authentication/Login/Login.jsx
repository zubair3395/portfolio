import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import routes from "../../../config/routes";
import { getUserData } from "../../../Redux/slices/authenticationSlice";
import InputField from "../../common/InputField";
import useForm from "./useForm/useForm";
import { validation } from "./useForm/validation";

const Login = () => {
  const { handleChange, user, error, getError } = useForm(validation);
  const dispatch = useDispatch();

  const fetchUser = useSelector((state) => state?.authentication?.userData);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleSubmit = () => {
    getError();
    let errorFree= true;

     const validate= validation(user);

     Object.values(validate).forEach((values)=>{
      if(values){
        errorFree= false;
      }
     })
    const { email, password } = user;
    const userData = fetchUser?.find((item) => item?.email === email);
    if(errorFree){
      if (userData) {
        if (userData?.email !== email) {
           toast("email is incorrect");
        } else if (userData?.password !== password) {
          toast("password is incorrect");
        } else {
          localStorage.setItem("name", userData?.name);
          navigate(routes?.default?.path);
        }
      } else {
        toast("Oops! User not found");
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
                  LogIn
                </h2>
                <p className=" text-center">
                  Please enter your Email and password!
                </p>

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
                <p>
                  Forget password?{" "}
                  <Link to={routes?.authentication?.forgetPassword} className='fw-bold text-white'>
                    {" "}
                    Click Here{" "}
                  </Link>
                </p>
                <button
                  className={
                    !user.email
                      ? "btn btn-danger btn-lg px-5 mt-3"
                      : "btn btn-outline-light btn-lg px-5 mt-3"
                  }
                  type="button"
                  onClick={handleSubmit}
                >
                  LogIn
                </button>
                <p>
                  Don't have an account?{" "}
                  <Link to={routes?.authentication?.signup} className="fw-bold text-white">
                    Sign Up
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
export default Login;
