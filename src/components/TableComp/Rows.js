import React from 'react';

function Rows({employees}) {
  return (
    <>
        {employees?.map(employee => (
          <tr key={employee.name.first + employee.name.last + employee.email}>
            <td className="text-center">
              <img alt="random user imported from randomuser.me/api" src={employee.picture.medium}/>
            </td>
            <td className="text-center">{employee.name.first}</td>
            <td className="text-center">{employee.name.last}</td>
            <td className="text-center">{employee.phone}</td>
            <td className="text-center">{employee.email}</td>
          </tr>
        ))}
    </>
  )
}

export default Rows;