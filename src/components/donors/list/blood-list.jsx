import "./blood-list.css";
import React from "react";

import Search from "../../search/search";

const BloodDonorsList = () => {
  const filterData = () => {
    
  };
  return (
    <React.Fragment>
      <Search filterData={filterData}></Search>
      <div className="donors-list-results mt-4">

      </div>
    </React.Fragment>
  );
};

export default BloodDonorsList;
