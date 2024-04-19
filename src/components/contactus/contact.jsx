import React, { useRef } from "react";

import "./contact.css";

const Contact = () => {
  let enquiryRef = useRef();
  const enquiry = (event) => {
    event.preventDefault();
    let name = enquiryRef.current[0].value;
    let username = enquiryRef.current[1].value;
    let phNo = enquiryRef.current[2].value;
    let message = enquiryRef.current[3].value;

    if (username && password && phNo) {
      return;
    }
    return;
  };
  return (
    <React.Fragment>
      <div className="contact mb-5 mt-5">
        <h5 className="fw-bold text-success">Contact Us</h5>
        <h4 className="text-success fw-bold">Pokuri Gandhasiri Trust</h4>
        <div className="details">
            <div>
              <div>No. 42, Road No 3, ASR Rajunagar colony</div>
              <div>Nizampet Road</div>
              <div>Hydernagar</div>
              <div>Hyderabad 500 085</div>
            </div>
            <div>Mobile : 1234</div>
            <div>Email : pokurigandhasiri999@gmail.com</div>
        </div>
      </div>
      <div className="enquiry mt-5">
        <form className="" ref={enquiryRef} onSubmit={enquiry}>
          <div className="display-5 mb-2">Enquiry</div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputEnquiryName"
              placeholder="koushik"
              minLength="6"
              required
            />
            <label htmlFor="floatingInputEnquiryName">Enter Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInputEnquiry"
              placeholder="name@example.com"
              minLength="6"
              required
            />
            <label htmlFor="floatingInputEnquiry">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputEnquiryPhNo"
              placeholder="name@example.com"
              maxLength="10"
              title="Please enter 10 digit mobile number"
              pattern="[1-9]{1}[0-9]{9}"
              minLength="10"
              required
            />
            <label htmlFor="floatingInputEnquiryPhNo">Mobile Number</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingMessageEnquiry"
              placeholder="Message"
              required
            />
            <label htmlFor="floatingMessageEnquiry">Message</label>
          </div>
          <input
            type="submit"
            value="Enquiry"
            className="btn btn-success mt-3"
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
