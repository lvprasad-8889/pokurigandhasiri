import "./search.css";

const Search = (props) => {
  const filterData = () => {
    props.filterData();
  };
  return (
    <div>
      <form onSubmit={filterData} className="d-flex gap-3">
        <input type="text" className="form-control" />
        <input type="submit" value="Search" className="btn btn-success" onChange={filterData} />
      </form>
    </div>
  );
};

export default Search;
