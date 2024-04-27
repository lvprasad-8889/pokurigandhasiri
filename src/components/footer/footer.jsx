import { Link, useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className="footer p-3">
      <div className="container gap-3 d-flex flex-wrap flex-lg-nowrap justify-md-content-between justify-sm-content-center align-items-center">
        <div className="services">
          <h5 className="text-success fw-bold">Services and Support</h5>
          <ul>
            <div className="d-flex gap-4 gap-sm-5 flex-wrap flex-md-nowrap">
              <div className="left">
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Emegency{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Education{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Cermonies & Rituals{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Family Unity Festivals and Integration{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    NRI Integration{" "}
                  </Link>
                </li>
              </div>
              <div className="right">
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Legal{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Counseling{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    sports{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    medical{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/support" onClick={() => navigate("../support")}>
                    Social Services{" "}
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="contact">
          <h5 className="fw-bold text-success">Contact Us</h5>
          <div className="">
            <h4 className="text-success fw-bold">Pokuri Gandhasiri Trust</h4>
            <div className="details">
              <div>
                <div>No. 42, Road No 3, ASR Rajunagar colony</div>
                <div>Nizampet Road</div>
                <div>Hydernagar</div>
                <div>Hyderabad 500 085</div>
              </div>
              <div>Mobile : 9885178884</div>
              <div>Email : pokurigandhasiri999@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
