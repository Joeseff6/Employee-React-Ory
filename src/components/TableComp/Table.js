import React, {useState, useEffect} from 'react';
import '../../styles/Table.css';
import Rows from './Rows';
import API from '../../utils/API';

function Table({search}) {
  let [employees,setEmployees] = useState([]);
  let [unfilteredEmployees, setUnfilteredEmployees] = useState([]);

  useEffect(() => {
    API.fetchEmployees()
    .then(response => response.json())
    .then(object => {
      const {results} = object
      setEmployees(results);
      setUnfilteredEmployees(results);
    })
  }, [])

  useEffect(() => {
    let originalEmployees = unfilteredEmployees;
    let filteredEmployees = originalEmployees.filter(employee =>{
      if (
        employee.name.first.includes(search) ||
        employee.name.last.includes(search) ||
        employee.phone.includes(search) ||
        employee.email.includes(search)) {
          return true
        } else {
          return false
        }
    })
    setEmployees(filteredEmployees)
  }, [search, unfilteredEmployees])


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
};

export default Table;