import { useDispatch, useSelector } from "react-redux";
import "./blood-card.css";
import toast from "react-hot-toast";
import {deleteBloodDonorAction} from '../../../store/action'

const BloodCard = ({ bloodDetails }) => {
  const isAdmin = useSelector((state) => state.isAdmin);
  const dispatch = useDispatch();
  const deleteDonor = (item) => {
    dispatch(deleteBloodDonorAction({phNo: item.phNo, bloodGroup: item.bloodGroup}))
    .then((res) => {
      toast.success("Donor deleted", {
        id: "clipboard"
      })
    })
    .catch((err) => {
      toast.error(err, {
        id: "clipboard"
      })
    })
  }
  return (
    <div className="card profile p-2 mt-5 m-auto">
      <div className="">
        <div className="row g-3">
          <div className="col-sm-6 center">
            <div className="rounded-circle profile-img text-uppercase">
              {bloodDetails.snn}
            </div>
          </div>
          <div className="col-sm-6 text-center text-sm-start d-flex justify-content-between flex-column">
            <div className="d-flex flex-column justify-content-between">
              <div className="name fw-bold text-capitalize mb-2">
                {bloodDetails.name}
              </div>
              <div className="mailId mb-2 fw-bold">
                {bloodDetails.bloodGroup}
              </div>
              <div className="phNo mb-2">{bloodDetails.phNo}</div>
              <div className="phNo mb-2">
                {bloodDetails.cityOrPlaceOrArea}, {bloodDetails.state},{" "}
                {bloodDetails.pincode}
              </div>
            </div>
            {isAdmin && (
              <div className="">
                <div className="btn btn-danger" onClick={() => deleteDonor(bloodDetails)}>Delete Donor</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodCard;
