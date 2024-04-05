import React from "react";

import "./about.css";

const About = () => {
  return (
    <React.Fragment>
      <h3 className="text-success fw-bold">ABOUT POKURI GANDHASIRI TRUST</h3>
      <div className="mb-3">
        <span className="text-success fw-bold">
          POKURI GANDHASIRI TRUST (PGT)
        </span>{" "}
        is a non-profit, non-political organization dedicated to the pursuit of
        social, cultural and literary goals Kamma Heritage and Culture. The
        Association was registered (No. 65/2016) in July 2016 and PGT is
        actively involved in various community and social events
      </div>
      <h4 className="text-success fw-bold">PGT MOTTO</h4>
      <div>
        Unite, Cherish and Promote Kamma Culture and Share the information.
      </div>
      <h4 className="text-success  fw-bold mt-3">WHAT WE DO ?</h4>
      <div>
        <span className="text-success fw-bold">POKURI GANDHASIRI TRUST</span>{" "}
        provides various activities for its members in Matrimonial, Business
        information,Employment and Blood donors through the Website and PGT also
        provides Assistance in Legal, Education, Counseling, Medical, Sports and
        Social Service areas.
      </div>
      <h4 className="text-success  fw-bold mt-3">
        POKURI GANDHASIRI TRUST OBJECTIVES
      </h4>
      <div>
        <ul className="objectives-list">
          <li>
            Assist and propagate cultural, literary, educational, social,
            economic and community affairs of the people of Kamma community.
            Organise periodic Telugu learning class.
          </li>
          <li>
            To provide matrimonial services,business information and employment
            opportunities to kamma community people. Encourage and facilitate to
            follow the Kamma customs, traditions and values. Foster friendship
            and understanding among Kamma and promote unity among the community.
          </li>
          <li>
            To reach out all the information for the community by setting up its
            own website e.g. membership,jobs, matrimonial listing, blood donors
            etc.,the association has set up its own website.
          </li>
          <li>
            Initiate, promote and maintain unity, friendly, co-operative
            relations with other Kamma associations.
          </li>
          <li>
            {" "}
            The PGT welcomes proposals from members for the betterment of the
            Association.
          </li>
          <li>
            PGT membership is limited to people of Kamma and PGT is focused on
            building a strong membership base. We effectively serve our
            communities across 16 types of services.
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default About;
