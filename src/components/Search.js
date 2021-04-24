import React from 'react';
import '../styles/Search.css'

function Search() {
  return (
    <div className="row mt-3 mb-3">
      <div className="col searchCol">
        <input type="text" placeholder="Enter Employee Information"></input>
      </div>
    </div>
  )
}

export default Search;