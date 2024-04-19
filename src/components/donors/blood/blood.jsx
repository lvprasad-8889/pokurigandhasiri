import { useDispatch } from "react-redux";
import { addBloodDonorAction } from "../../../store/action";
import "./blood.css";
import React, { useRef } from "react";
import toast from "react-hot-toast";
const Blood = () => {
  const dispatch = useDispatch();
  let bloodRef = useRef();
  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const addBloodDonor = (event) => {
    event.preventDefault();
    let donorDetails = {
      name: bloodRef.current[0].value,
      state: bloodRef.current[1].value,
      phNo: bloodRef.current[2].value,
      pincode: bloodRef.current[3].value,
      bloodGroup: bloodRef.current[4].value,
      cityOrPlaceOrArea: bloodRef.current[5].value,
    };
    dispatch(addBloodDonorAction(donorDetails))
      .then((res) => {
        toast.success("Blood details added successfully", {
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
    <React.Fragment>
      <div className="container">
        <div className="row">
          <form
            className="col-12 col-md-8 m-auto"
            ref={bloodRef}
            onSubmit={addBloodDonor}
          >
            <div className="display-5 mb-2">Blood Donation</div>

            <div className="fw-bold mb-2">
              ADD YOUR DETAILS HERE - IF YOU ARE INTERESTED
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputPersonsName"
                placeholder="name"
                minLength="3"
                required
              />
              <label htmlFor="floatingInputPersonsName">Persons name</label>
            </div>
            <div className="mb-3">
              <select
                className="form-select blood-group"
                id="floatingSelectBlood"
                required
              >
                <option defaultValue value="">
                  Select the state
                </option>
                {states.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPasswordDonor"
                placeholder="phnO"
                minLength="10"
                maxLength="10"
                title="Please enter 10 digit mobile number"
                pattern="[1-9]{1}[0-9]{9}"
                required
              />
              <label htmlFor="floatingPasswordDonor">Mobile number</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPasswordDonor"
                placeholder="pincode"
                minLength="6"
                maxLength="6"
                title="Please enter 6 digit pincode"
                pattern="[1-9]{1}[0-9]{5}"
                required
              />
              <label htmlFor="floatingInputCity">Pincode</label>
            </div>

            <div className="mb-3">
              <select
                className="form-select blood-group"
                id="floatingSelect"
                required
              >
                <option defaultValue value="">
                  Select the blood group
                </option>
                <option value="A+ve">A+ve</option>
                <option value="A-ve">A-ve</option>
                <option value="B+ve">B+ve</option>
                <option value="B-ve">B-ve</option>
                <option value="O+ve">O+ve</option>
                <option value="O-ve">O-ve</option>
                <option value="AB+ve">AB+ve</option>
                <option value="AB-ve">AB-ve</option>
              </select>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputCity"
                placeholder="name"
                required
              />
              <label htmlFor="floatingInputCity">City / Place / Area</label>
            </div>
            <input
              type="submit"
              value="Add Donor"
              className="btn btn-success mt-3"
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blood;
