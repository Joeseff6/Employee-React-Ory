import React, {useState, useEffect} from 'react';
import '../../styles/Table.css'
import Rows from './Rows';
import API from '../../utils/API';

function Table() {
  let [employees,setEmployees] = useState([]);

  useEffect(async () => {
    const getEmployees = await API.fetchEmployees();
    const { results } = await getEmployees.json()
    setEmployees(employees = results)
  }, [])

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
        <Rows employees={employees}/>
      </tbody>
    </table>
  </div>
  )
}

export default Table;