import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import "./blood-list.css";

import Search from "../../search/search";
import { searchBloodGroupAction } from "../../../store/action";

const BloodDonorsList = () => {
  const dispatch = useDispatch();
  const bloodDonorsList = useSelector((state) => state.bloodDonorsList);
  const isLoading = useSelector((state) => state.isLoading);
  const filterData = (selected) => {
    dispatch(searchBloodGroupAction(selected)).catch((err) => {
      toast.error(err, {
        id: "clipboard",
      });
    });
  };
  return (
    <React.Fragment>
      <Search
        filterData={(selected) => filterData(selected)}
        bloodSearch={true}
      />
      <div className="donors-list-results mt-4">
        {isLoading && (
          <div className="center loader-height">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!isLoading && !bloodDonorsList.length && (
          <div className="display-6 text-center">
            No blood donors found with selected blood group
          </div>
        )}
        {!isLoading &&
          bloodDonorsList.length && (
            bloodDonorsList.map((item, index) => (
              <div>
                {item}
              </div>
            ))
          )
          }
      </div>
    </React.Fragment>
  );
};

export default BloodDonorsList;
