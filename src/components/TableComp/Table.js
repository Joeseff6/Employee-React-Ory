import React from 'react';
import '../../styles/Table.css'
import Rows from './Rows';

function Table() {
    return (
      <div className="row mx-5">
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th className="text-center" scope="col">Photo</th>
            <th className="text-center" scope="col">First Name</th>
            <th className="text-center" scope="col">Last Name</th>
            <th className="text-center" scope="col">Office Phone</th>
            <th className="text-center" scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <Rows />
        </tbody>
      </table>
    </div>
    )
}

export default Table;