import React, {useState, useEffect} from 'react';
import '../../styles/Table.css';
import Rows from './Rows';
import API from '../../utils/API';

function Table({search}) {
  let [employees,setEmployees] = useState([]);
  let [unfilteredEmployees, setUnfilteredEmployees] = useState([]);
  let [filteredEmployees] = useState([]);

  useEffect( () => {
    getEmployees();
  }, [])

  useEffect(() =>{
    filterEmployees();
  },[search])
  
  const filterEmployees = () => {
    setEmployees(employees = unfilteredEmployees);
    filteredEmployees = employees.filter(employee =>{
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
    setEmployees(employees = filteredEmployees)
  }

  const getEmployees = async() => {
    const getEmployees = await API.fetchEmployees();
    const { results } = await getEmployees.json();
    setUnfilteredEmployees(unfilteredEmployees = results);
    setEmployees(employees = unfilteredEmployees);
  };

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