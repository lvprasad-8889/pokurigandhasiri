import React from "react";

import "./temples.css";

import Search from "../search/search";

const Temples = () => {
  const filterData = () => {};
  return (
    <React.Fragment>
      <Search filterData={filterData} templeSearch={true} />
    </React.Fragment>
  );
};

export default Temples;
