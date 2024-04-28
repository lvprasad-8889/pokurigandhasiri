import { useDispatch, useSelector } from "react-redux";
import "./enquiries.css";
import {
  deleteEnquiries,
  getEnquiries,
  shortHandNotationOfName,
  updateEnquiries,
} from "../../store/action";
import { pgtSliceActions } from "../../store/reducer";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Enquiries = () => {
  const enquiries = useSelector((state) => state.enquiries);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const fetchEnquiries = () => {
    dispatch(getEnquiries())
      .then((res) => {
        toast.success("Enquiries refreshed", {
          id: "clipboard",
        });
      })
      .catch((err) => {
        toast.error(err, {
          id: "clipboard",
        });
      });
  };

  const updateEnquiry = (item) => {
    dispatch(updateEnquiries(item.mailId))
      .then((res) => {
        toast.success("Marked as completed", {
          id: "clipboard",
        });
      })
      .catch((err) => {
        toast.error(err, {
          id: "clipboard",
        });
      });
  };

  const deleteEnquiry = (item) => {
    console.log(item.mailId);
    dispatch(deleteEnquiries(item.mailId))
      .then((res) => {
        toast.success("Deleted enquiry", {
          id: "clipboard",
        });
      })
      .catch((err) => {
        toast.error(err, {
          id: "clipboard",
        });
      });
  };

  useEffect(() => {
    dispatch(getEnquiries());
  }, []);

  return (
    <div className="row">
      <div className="d-flex justify-content-end loader-enquiries">
        {isLoading ? (
          <div className="spinner-border text-success"></div>
        ) : (
          <div className="btn btn-success" onClick={fetchEnquiries}>
            Refresh
          </div>
        )}
      </div>
      {enquiries && enquiries.length ? (
        enquiries.map((item, index) => (
          <div className="card profile p-2 mt-5 m-auto col-lg-6" key={index}>
            <div className="container">
              <div className="row g-2">
                <div className="col-sm-6 center">
                  <div className="rounded-circle profile-img text-uppercase">
                    {item.snn}
                  </div>
                </div>
                <div className="col-sm-6 text-center text-sm-start d-flex justify-content-between flex-column">
                  <div className="">
                    <div className="name fw-bold text-capitalize mb-2">
                      {item.name}
                    </div>
                    <div className="mailId mb-2">{item.mailId}</div>
                    <div className="phNo mb-2">{item.phNo}</div>
                  </div>
                </div>
                <div className="phNo mb-2 text-center">
                  {" "}
                  <span className="fw-bold">Message : </span>
                  {item.message}
                </div>
              </div>
              <div className="d-flex justify-content-around mt-3 gap-2 flex-wrap">
                <div
                  className="btn btn-danger"
                  onClick={() => deleteEnquiry(item)}
                >
                  Delete
                </div>
                <div
                  className="btn btn-success"
                  onClick={() => updateEnquiry(item)}
                >
                  Mark as completed
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="display-5 text-center">
          <div className=""> Hello Admin</div>
          <div className="">No Enquiries as of now</div>
        </div>
      )}
    </div>
  );
};

export default Enquiries;
