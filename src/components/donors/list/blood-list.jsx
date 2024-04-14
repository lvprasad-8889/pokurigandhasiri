import "./blood-list.css";
import React from "react";

import Search from "../../search/search";

const BloodDonorsList = () => {
  const bloodDonorsList = []
  const filterData = () => {
    
  };
  return (
    <React.Fragment>
      <Search filterData={filterData} bloodSearch={true} />
      <div className="donors-list-results mt-4">
        {
          !bloodDonorsList.length && <div className="display-6 text-center">No blood donors found with selected blood group</div>
        }
      </div>
    </React.Fragment>
  );
};

export default BloodDonorsList;
