import { useState, useRef } from "react";
import "./search.css";

const Search = (props) => {
  const bloodGroups = [
    "A+ve",
    "A-ve",
    "B+ve",
    "B-ve",
    "AB+ve",
    "AB-ve",
    "O+ve",
    "O-ve",
  ];

  const searchBloodGroupRef = useRef("A+ve");

  const filterData = (event) => {
    event.preventDefault();
    props.filterData(searchBloodGroupRef.current.value);
  };
  
  return (
    <div>
      <form onSubmit={filterData} className="d-flex gap-3">
        {props.templeSearch && <input type="text" className="form-control" />}
        {props.bloodSearch && (
          <select className="form-select" ref={searchBloodGroupRef} onChange={filterData}>
            {bloodGroups.map((item, index) => (
              <option
                value={item}
                key={index}
              >
                {item}
              </option>
            ))}
          </select>
        )}
      </form>
    </div>
  );
};

export default Search;
