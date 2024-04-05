import "./home.css";

const Home = () => {
  const data = 
    {
      "Account Name": "POKURI GANDHASIRI TRUST",
      "Account No": "1234",
      "IFSC Code": "ABCD",
      "Branch": "Sample branch",
      "Any UPI Mobile Number": "1234",
    };
  return (
    <div>
      <h5 className="text-success fw-bold">WELCOME TO POKURI GANDHASIRI TRUST</h5>
      <div className="text-start">
        We Kammas popularly recognized as Kamma Naidus or Kamma Naickers have
        predominance in states like Andhra Pradesh, TamilNadu and Karnataka.
        They are also recognized with Surnames like Pokuris, Naidus, Chaudhary’s,
        Naickers, Vadugars, Raos, Rayudu and Nayakas.
        <div className="mt-3">
          The main objective of this association is to unite all people of Kamma
          Naidu Community under a single hand. To create awareness and to
          safeguard our community culture, heritage and customs.
        </div>
      </div>

      <h5 className="mt-5 text-success fw-bold">WELCOME TO POKURI GANDHASIRI TRUST</h5>
      <div className="text-start">
        We Kammas popularly recognized as Kamma Naidus or Kamma Naickers have
        predominance in states like Andhra Pradesh, TamilNadu and Karnataka.
        They are also recognized with Surnames like Naidus, Chaudhary’s,
        Naickers, Vadugars, Raos, Rayudu and Nayakas. The main objective of this
        association is to unite all people of Kamma Naidu Community under a
        single hand. To create awareness and to safeguard our community culture,
        heritage and customs.
      </div>

      <h5 className="mt-5 text-success">FOR DONATIONS</h5>
      <div className="bank-details-header bg-secondary p-3 text-white">
        <div className="bank-details-summary">
          <h5> BANK ACCOUNT DETAILS </h5>
          {
            Object.keys(data).map((item, index) => (
                <div className="d-flex account-details flex-wrap" key={index}>
                    <div className="fw-bold">{item}</div>
                    <div>&nbsp;:&nbsp;{data[item]}</div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
