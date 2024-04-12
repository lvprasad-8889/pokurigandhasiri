import "./profile.css";

import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  let userData = {
    name: "Lv prasad",
    phNo: "8688131158",
    mailId: "lvprasad8889@gmail.com",
    shortNotationOfName: "lp",
  };
  return (
    <div className="card profile p-2  mt-5 m-auto">
      <div className="container">
        <div className="row g-2">
          <div className="col-sm-6 center">
            <div className="rounded-circle profile-img text-uppercase">
              {userData.shortNotationOfName}
            </div>
          </div>
          <div className="col-sm-6 text-center text-sm-start d-flex justify-content-between flex-column">
            <div className="">
              <div className="name fw-bold text-capitalize mb-2">
                {userData.name}
              </div>
              <div className="mailId mb-2">{userData.mailId}</div>
              <div className="phNo mb-2">{userData.phNo}</div>
            </div>
            <div className="">
              <div
                className="btn btn-success mt-4 mt-sm-0"
                onClick={() => {
                  localStorage.clear();
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
