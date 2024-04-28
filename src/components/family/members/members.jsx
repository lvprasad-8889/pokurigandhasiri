import { useDispatch, useSelector } from "react-redux";
import "./members.css";
import { useEffect } from "react";
import { familyMembers } from "../../../store/action";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members);

  useEffect(() => {
    dispatch(familyMembers());
  }, []);
  return (
    <div className="row">
      {members && members.length ? (
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
                    <div className="mailId mb-2">{item.fatherName}</div>
                    <div className="dob mb-2">{item.dob}</div>
                    <div className="phNo mb-2">{item.phNo}</div>
                    <div className="profession mb-2">{item.profession}</div>
                    <div className="nadress mb-2">{item.nativeAddress}</div>
                    <div className="paddress mb-2">{item.permanentAddress}</div>
                  </div>
                </div>

                {item.remarks && (
                  <div className="remarks mb-2 mt-2">
                    Remarks : {item.remakrs}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="display-5 text-center">
          <div className=""> Hello there!</div>
          <div className="">No family members as of now :(</div>
        </div>
      )}
    </div>
  );
};

export default Members;
