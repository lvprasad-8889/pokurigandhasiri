import React, { useRef } from "react";

import "./members.css";

const Members = () => {
  let loginRef = useRef();
  let registerRef = useRef();

  const login = (event) => {
    event.preventDefault();
    let username = loginRef.current[0].value;
    let password = loginRef.current[1].value;
    if (username && password) {
        return;
    }
    return;
  };
  const register = (event) => {
    event.preventDefault();
    let username = registerRef.current[0].value;
    let phNo = registerRef.current[1].value;
    let password = registerRef.current[2].value;

    if (username && password && phNo) {
        return;
    }
    return;
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row g-2">
          <form className="col-12 col-lg-6" ref={loginRef} onSubmit={login}>
            <div className="display-5 mb-2">Memeber Login</div>

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

          <form className="col-12 col-lg-6" ref={registerRef} onSubmit={register}>
            <div className="display-5 mb-2">Member Registration</div>
            <div className="fw-bold mb-2">New Users Register here</div>
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
  );
};

export default Members;
