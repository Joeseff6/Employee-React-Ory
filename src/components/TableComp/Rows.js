import React from 'react';

function Rows({employees}) {
  console.log(employees)
  return (
    <>
      {employees.map(employee => (
        <tr key={employee.id}>
              <td>{employee.image}</td>
              <td>{employee.first}</td>
              <td>{employee.last}</td>
              <td>{employee.email}</td>
        </tr>
      ))}
    </>

  )
}

export default Rows;