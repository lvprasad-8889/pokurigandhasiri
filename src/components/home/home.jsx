import "./home.css";
import toast from "react-hot-toast";

import Sample from "../../assets/family-images/download.jpg";

const Home = () => {
  const bankAccountDetails = {
    "Account Name": "POKURI GANDHASIRI TRUST",
    "Account No": "1234",
    "IFSC Code": "ABCD",
    Branch: "Sample branch",
    "Any UPI Mobile Number": "1234",
  };

  const carouselData = [
    {
      img: Sample,
      caption: {
        header: "Pokuri Gandhasiri Trust memebers",
        footer: "Representative and Initiators of PGT trust",
      },
    },
    {
      img: Sample,
      caption: {
        header: "First slide label",
        footer: "Some representative placeholder content for the second slide.",
      },
    },
    {
      img: Sample,
      caption: {
        header: "",
        footer: "",
      },
    },
  ];
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide mb-3">
        <div className="carousel-indicators d-none d-sm-flex">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {carouselData.map((item, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={item.img}
                className="d-block w-100"
                alt={`Image-(index + 1)-loading...`}
                height="375px"
              />
              {(item.caption.header || item.caption.footer) && (
                <div className="carousel-caption pb-none pb-sm-5">
                  {item.caption.header && <h5>{item.caption.header}</h5>}
                  {item.caption.footer && <p className="d-sm-block d-none">{item.caption.footer}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h5 className="text-success fw-bold">
        WELCOME TO POKURI GANDHASIRI TRUST
      </h5>
      <div className="text-start">
        We Kammas popularly recognized as Kamma Naidus or Kamma Naickers have
        predominance in states like Andhra Pradesh, TamilNadu and Karnataka.
        They are also recognized with Surnames like Pokuris, Naidus,
        Chaudhary’s, Naickers, Vadugars, Raos, Rayudu and Nayakas.
        <div className="mt-3">
          The main objective of this association is to unite all people of Kamma
          Naidu Community under a single hand. To create awareness and to
          safeguard our community culture, heritage and customs.
        </div>
      </div>

      <h5 className="mt-5 text-success fw-bold">
        WELCOME TO POKURI GANDHASIRI TRUST
      </h5>
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
          {Object.keys(bankAccountDetails).map((item, index) => (
            <div className="d-flex account-details flex-wrap" key={index}>
              <div className="fw-bold">{item}</div>
              <div>&nbsp;:&nbsp;{bankAccountDetails[item]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
