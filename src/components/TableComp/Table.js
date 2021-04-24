import React from 'react';
import '../../styles/Table.css'
import Rows from './Rows';
class Table extends React.Component {
  render() {
    return (
      <div className="row mx-5">
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <Rows />
        </tbody>
      </table>
    </div>
    )
  }
}

export default Table;