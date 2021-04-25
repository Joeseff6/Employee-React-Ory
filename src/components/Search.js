import React, {useState} from 'react';
import '../styles/Search.css';
import Table from './TableComp/Table';

function Search() {
  let [search, setSearch] = useState('');

  const handleChange = ({target}) => {
    const {value} = target;
    setSearch(search = value)
  }

  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col searchCol">
          <span className="input-group-text" id="employeeLabel">Search by Employee!</span>
          <input 
          className="form-control col-4" 
          name="search" 
          type="text" 
          placeholder="Enter Employee Information"
          aria-describedby="employeeLabel"
          onChange={handleChange}></input>
        </div>
      </div>

      <Table search={search}/> 

    </>
  )


}

export default Search;