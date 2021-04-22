import React from 'react';
import '../styles/Table.css'
import Rows from './Rows';

const Table = function () {

  let values = {image: "picture", first: "John", last: "Appleseed", email: "email"};
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
          <Rows 
            image={values.image}
            first={values.first}
            last={values.last}
            email={values.email}
          />
        </tbody>
      </table>
    </div>
  )
}

export default Table;