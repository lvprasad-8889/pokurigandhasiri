import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import "./blood-list.css";

import Search from "../../search/search";
import { searchBloodGroupAction } from "../../../store/action";
import BloodCard from "../blood-card/blood-card";

const BloodDonorsList = () => {
  const dispatch = useDispatch();
  let initial = 1;
  const bloodDonorsList = useSelector((state) => state.bloodDonorsList);
  const isLoading = useSelector((state) => state.isLoading);
  const filterData = (selected) => {
    dispatch(searchBloodGroupAction(selected))
      .catch((err) => {
        toast.error(err, {
          id: "clipboard",
        });
      });
  };
  useEffect(() => {
    if ((initial = 1)) {
      filterData("A+ve");
      initial = 2;
    }
  }, []);
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
        {!isLoading && !bloodDonorsList.length ? (
          <div className="display-6 text-center">
            No blood donors found with selected blood group
          </div>
        ) : (
          <div className="row">
            {!isLoading &&
              bloodDonorsList.length &&
              bloodDonorsList.map((item, index) => (
                <div className="col-xl-6 p-0" key={index}>
                  <BloodCard bloodDetails={item} />
                </div>
              ))}
          </div>  
        )}
      </div>
    </React.Fragment>
  );
};

export default BloodDonorsList;
