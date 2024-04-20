import { useSelector } from "react-redux";
import "./blood-card.css";

const BloodCard = ({ bloodDetails }) => {
  return (
      <div className="card profile p-2 mt-5 m-auto">
        <div className="container">
          <div className="row g-2">
            <div className="col-sm-6 center">
              <div className="rounded-circle profile-img text-uppercase">
                {bloodDetails.snn}
              </div>
            </div>
            <div className="col-sm-6 text-center text-sm-start d-flex justify-content-between flex-column">
              <div className="">
                <div className="name fw-bold text-capitalize mb-2">
                  {bloodDetails.name}
                </div>
                <div className="mailId mb-2 fw-bold">{bloodDetails.bloodGroup}</div>
                <div className="phNo mb-2">{bloodDetails.phNo}</div>
                <div className="phNo mb-2">{bloodDetails.cityOrPlaceOrArea}, {bloodDetails.state}, {bloodDetails.pincode}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default BloodCard;
