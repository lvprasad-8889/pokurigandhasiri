import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./navbar.css";

import Logo from "../../assets/images/logo.jpg";
import RightArrow from "../../assets/images/right-arrow.png";
import { pgtSliceActions } from "../../store/reducer";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin);
  const loggedIn = useSelector((state) => state.loggedIn);

  console.log(loggedIn, isAdmin);
  const [links, setLinks] = useState([
    {
      name: "home",
      to: "",
      display: true,
      children: [],
    },
    {
      name: "profile",
      to: "profile",
      display: loggedIn,
      children: [],
    },
    {
      name: "enquiries",
      to: "admin/enquiries",
      display: isAdmin,
      children: [],
    },
    {
      name: "about us",
      to: "about",
      display: true,
      children: [],
    },
    {
      name: "members",
      to: "members",
      display: true,
      children: [],
    },
    {
      name: "support",
      to: "support",
      display: true,
      children: [],
      // children: [
      //   {
      //     name: "emergency",
      //     to: "support/emergency",
      //     children: [],
      //   },
      //   {
      //     name: "education",
      //     to: "support/education",
      //     children: [],
      //   },
      // ],
    },
    {
      name: "blood donors",
      to: "blood-donors",
      display: true,
      children: [
        {
          name: "view blood donors list",
          to: "donors/list",
          children: [],
        },
        {
          name: "add blood donors",
          to: "donors/add-donor",
          children: [],
        },
      ],
    },
    // {
    //   name: "temples",
    //   to: "temples",
    //   children: [],
    // },
    {
      name: "contact us",
      to: "contact",
      display: true,
      children: [],
    },
    {
      name: "Log Out",
      to: "",
      display: loggedIn,
      children: [],
    },
  ]);

  useEffect(() => {
    setLinks([...links])
  }, [isAdmin, loggedIn])

  return (
    <React.Fragment>
      <nav className="navbar navbar-white">
        <div className="container d-flex flex-nowrap">
          <Link
            className="navbar-brand d-flex gap-1 align-items-center"
            to="/home"
          >
            <img
              src={Logo}
              alt="Pokuri Gandha Siri Trust"
              width="150px"
              height="100px"
            />
            <div className="line-one fw-bold text-success text-wrap">
              Pokuri GandhaSiri Trust
            </div>
            {/* <div className="line-one fw-bold text-success text-wrap d-block d-sm-none pgt-shorthand" title="Pokuri GandhaSiri Trust">PGT</div> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <img src={Logo} alt="Pokuri Gandha Siri Trust" width="70px" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {links.map((item, index) => (
                <React.Fragment key={index}>
                  {item.display && (
                    <div className="navbar-buttons">
                      {item.children.length > 0 ? (
                        <div className="accordion-header">{item.name}</div>
                      ) : (
                        <Link
                          onClick={() => {
                            if (item.to === "Log Out") {
                              dispatch(pgtSliceActions.logout());
                              navigate("../");
                            }
                            navigate(item.to);
                          }}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  )}
                  {item.children.length > 0 &&
                    item.children.map((sub, ind) => (
                      <Link
                        key={ind}
                        onClick={() => navigate(sub.to)}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        className="d-block navbar-buttons link-childrens"
                      >
                        {" " + sub.name}
                      </Link>
                    ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
