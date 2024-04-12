import "./support.css";
import React from "react";
const Support = () => {
  const data = [
    {
      title: "emergency",
      description:
        "In case of any emergency in medical or any other issues, PGT provides support to their members.",
    },
    {
      title: "education",
      description:
        "The PGT Education program is a guide to help students with their education and overall improvement. We guide them not just with education, but also help them with overall development. PGT Education program holds the hand of the students him / her to overcome obstacles and challenges, build character & personality, adapt to different environments, inculcate values and help to stay focused on the goal.",
    },
    {
      title: "cermonies & rituals",
      description:
        "PGT provides assistance based on requests from members for conducting ceremonies and performing rituals.",
    },
    {
      title: "FAMILY UNITY FESTIVALS AND FAMILY INTEGRATION",
      description:
        "PGT annual get-together for all members and friends once in a year, a small part of which is given over to an annual meeting of members.",
    },
    {
      title: "NRI INTEGRATION",
      description:
        "Through membership registration in the website, NRIs can be identified and integrated.",
    },
    {
      title: "LEGAL",
      description:
        "PGT provides free Legal Advice support to its members. Legal Assistance will be provided based on the request from the members.",
    },
    {
      title: "COUNSELING",
      description:
        "PGT provides counseling to members and their families by identifying needs and supporting them through an integrated system of care partners. Our counselors will partner with you to listen to your concerns and assess your needs. Together, you will develop goals for your counseling sessions.",
    },
    {
      title: "SPORTS",
      description:
        "PGT provides healthy, structured sports programs for girls and boys. We encourage active young people with the opportunity to develop values such as commitment, respect for the opponent, adherence to rules, teamwork and fair play.",
    },
    {
      title: "MEDICAL",
      description:
        "PGT provides health camp provides free diagnosis, medicines and food. PGT is planning to tie up with hospitals for providing concession in hospital bills.",
    },
    {
      title: "SOCIAL SERVICES",
      description: "PGT Social services includes the benefits and facilities such as education, food, health care and job training."
    }
  ];
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <div key={index} className="mb-3">
          <h5 className="fw-bold text-success text-uppercase">{item.title}</h5>
          <div>{item.description}</div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Support;
