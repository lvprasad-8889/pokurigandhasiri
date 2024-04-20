import { useSelector } from "react-redux";
import "./enquiries.css";
import { shortHandNotationOfName } from "../../store/action";

const Enquiries = () => {
  const enquiries = useSelector((state) => state.enquiries);
  return (
    <div className="row">
      {enquiries &&
        enquiries.length &&
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
            </div>
          </div>
        ))}
    </div>
  );
};

export default Enquiries;
