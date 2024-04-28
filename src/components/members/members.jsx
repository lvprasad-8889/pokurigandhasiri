import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./members.css";
import {
  registerAction,
  loginAction,
  shortHandNotationOfName,
} from "../../store/action";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Members = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let loginRef = useRef();
  let registerRef = useRef();
  const loggedIn = useSelector((state) => state.loggedIn);

  const clearRegisterFields = () => {
    registerRef.current[0].value = "";
    registerRef.current[1].value = "";
    registerRef.current[2].value = "";
    registerRef.current[3].value = "";
  };

  const clearLoginFields = () => {
    loginRef.current[0].value = "";
    loginRef.current[1].value = "";
  };

  const login = (event) => {
    event.preventDefault();
    let mailId = loginRef.current[0].value;
    let password = loginRef.current[1].value;
    if (mailId && password) {
      dispatch(
        loginAction({
          mailId,
          password,
        })
      )
        .then((res) => {
          toast.success("Login successfull");
          navigate("../profile");
        })
        .catch((err) => {
          clearLoginFields();
          toast.error("Username or password is wrong", {
            id: "clipboard",
          });
        });
      return;
    }
    return;
  };

  const register = (event) => {
    event.preventDefault();
    let name = registerRef.current[0].value;
    let mailId = registerRef.current[1].value;
    let phNo = registerRef.current[2].value;
    let password = registerRef.current[3].value;
    let snn = shortHandNotationOfName(name);

    dispatch(
      registerAction({
        name,
        mailId,
        phNo,
        password,
        snn,
      })
    )
      .then((res) => {
        clearRegisterFields();
        toast.success("Registered successfully, Please login");
        loginRef.current[0].focus();
      })
      .catch((err) => {
        toast.error("User already exists", {
          id: "clipboard",
        });
        registerRef.current[0].value = "";
      });
  };
  return !loggedIn ? (
    <React.Fragment>
      <div className="container">
        <div className="row g-4">
          <form className="col-12 col-lg-6" ref={loginRef} onSubmit={login}>
            <div className="display-5 mb-2">Member Login</div>

            <div className="fw-bold mb-2">Existing Users Login here</div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <input
              type="submit"
              value="Log In"
              className="btn btn-success mt-3"
            />
          </form>

          <form
            className="col-12 col-lg-6"
            ref={registerRef}
            onSubmit={register}
          >
            <div className="display-5 mb-2">Member Registration</div>
            <div className="fw-bold mb-2">New Users Register here</div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputRegisterName"
                placeholder="koushik"
                minLength="3"
                required
              />
              <label htmlFor="floatingInputRegisterName">Enter Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInputRegister"
                placeholder="name@example.com"
                minLength="6"
                required
              />
              <label htmlFor="floatingInputRegister">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputRegisterPhNo"
                placeholder="name@example.com"
                maxLength="10"
                title="Please enter 10 digit mobile number"
                pattern="[1-9]{1}[0-9]{9}"
                minLength="10"
                required
              />
              <label htmlFor="floatingInputRegisterPhNo">Mobile Number</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPasswordRegister"
                placeholder="Password"
                minLength="6"
                required
              />
              <label htmlFor="floatingPasswordRegister">Password</label>
            </div>
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-success mt-3"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  ) : (
    <Navigate to="../" />
  );
};

export default Members;
