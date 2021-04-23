import React from 'react';
import '../../styles/Table.css'
import Rows from './Rows';

function Table() {
  let employees = [
      {
      id: 1, image: "picture", first: "John", last: "Appleseed", email: "email"
      },
      {
        id: 2, image: "picture", first: "Foo", last: "Bar", email: "email2"
      }
  ];
  return (
    <div className="row">
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
          <Rows employees={employees} />
        </tbody>
      </table>
    </div>
  )
}

export default Table;