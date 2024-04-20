import { pgtSliceActions } from "../../store/reducer";
import "./profile.css";

import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.loggedIn);
  let userData = useSelector((state) => state.userData);
  return !loggedIn ? (
    <Navigate to="../members" />
  ) : (
    <div className="card profile p-2  mt-5 m-auto">
      <div className="container">
        <div className="row g-2">
          <div className="col-sm-6 center">
            <div className="rounded-circle profile-img text-uppercase">
              {userData.snn}
            </div>
          </div>
          <div className="col-sm-6 text-center text-sm-start d-flex justify-content-between flex-column">
            <div className="">
              <div className="name fw-bold text-capitalize mb-2">
                {userData.name}
              </div>
              <div className="mailId mb-2">{userData.username}</div>
              <div className="phNo mb-2">{userData.phNo}</div>
            </div>
            <div className="">
              <div
                className="btn btn-success mt-4 mt-sm-0"
                onClick={() => {
                  dispatch(pgtSliceActions.logout());
                  navigate("../");
                }}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
