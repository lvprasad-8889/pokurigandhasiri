import "./search.css";

const Search = (props) => {
  const bloodGroups = [
    "A+ve", "A-ve", "B+ve", "B-ve", "AB+ve", "AB-ve", "O+ve", "O-ve"
  ]
  const filterData = (event) => {
    event.preventDefault();
    props.filterData();
  };
  return (
    <div>
      <form onSubmit={filterData} className="d-flex gap-3">
        {
          props.templeSearch && <input type="text" className="form-control" />
        }
        {
          props.bloodSearch && <select className="form-select">
          {
            bloodGroups.map((item,index) =>(
              <option value={item} key={index}>{item}</option>
            ))
          }
        </select>
        }
        <input type="submit" value="Search" className="btn btn-success" onClick={filterData}  />
      </form>
    </div>
  );  
};

export default Search;
