import './not-found.css'

import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    let navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="text-center text-danger display-4">
        Sorry page not found :(
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success mt-3" onClick={() => navigate("")}>Go To Home</button>
      </div>
    </div>
  );
};

export default NotFound;
