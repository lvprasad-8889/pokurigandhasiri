import { useDispatch } from "react-redux";
import { useRef } from "react";
import "./family.css";

import { shortHandNotationOfName, familyAction } from "../../../store/action";
import toast from "react-hot-toast";

const Family = () => {
  const dispatch = useDispatch();
  const familyRef = useRef();

  const clearFamilyMemberDetails = () => {
    familyRef.current[0].value = "";
    familyRef.current[1].value = "";
    familyRef.current[2].value = "";
    familyRef.current[3].value = "";
    familyRef.current[4].value = "";
    familyRef.current[5].value = "";
    familyRef.current[6].value = "";
    familyRef.current[7].value = "";
  };

  const addFamily = (event) => {
    
    event.preventDefault();
    let name = familyRef.current[7].value;
    let fatherName = familyRef.current[1].value;
    let dob = familyRef.current[2].value;
    let phNo = familyRef.current[3].value;
    let profession = familyRef.current[4].value;
    let nativeAddress = familyRef.current[5].value;
    let permanentAddress = familyRef.current[6].value;
    let remarks = familyRef.current[7].value ? familyRef.current[7].value : "";

    dispatch(
      familyAction({
        name,
        fatherName,
        dob,
        phNo,
        profession,
        nativeAddress,
        permanentAddress,
        remarks,
        snn: shortHandNotationOfName(name),
      })
    )
      .then((res) => {
        toast.success("Family member added", {
          id: "clipboard",
        });
      })
      .catch((err) => {
        toast.error(err, {
          id: "clipboard",
        });
      });
  };
  return (
    <div className="row">
      <form
        className="col-12 col-md-10 col-lg-8 m-auto"
        ref={familyRef}
        onSubmit={addFamily}
      >
        <div className="display-5 mb-2">Member Registration</div>
        <div className="fw-bold mb-2">New Users addFamily here</div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputaddFamilyName"
            placeholder="koushik"
            minLength="3"
            required
          />
          <label htmlFor="floatingInputaddFamilyName">Enter Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputFatherName"
            placeholder="name@example.com"
            minLength="3"
            required
          />
          <label htmlFor="floatingInputaddFamily">Father Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInputDateOfBirth"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInputaddFamily">Date of birth</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInputaddFamilyPhNo"
            placeholder="name@example.com"
            maxLength="10"
            title="Please enter 10 digit mobile number"
            pattern="[1-9]{1}[0-9]{9}"
            minLength="10"
            required
          />
          <label htmlFor="floatingInputaddFamilyPhNo">Mobile Number</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingProfession"
            placeholder="text"
            required
          />
          <label htmlFor="floatingPasswordaddFamily">Profession</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingNativeAddress"
            placeholder="text"
            required
          />
          <label htmlFor="floatingPasswordaddFamily">Native Address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingPresentAddress"
            placeholder="text"
            required
          />
          <label htmlFor="floatingPasswordaddFamily">Present Address</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingRemarks"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordaddFamily">Remarks</label>
        </div>
        <input
          type="submit"
          value="Add family member"
          className="btn btn-success mt-3"
        />
      </form>
    </div>
  );
};

export default Family;
