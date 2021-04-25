import React from 'react';
import API from '../../utils/API';

class Rows extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  async getEmployees() {
    const getEmployees = await API.fetchEmployees();
    const employeeData = await getEmployees.json()
    this.setState({ employees: employeeData.results })
  }

  componentDidMount() {
    if (this.state.employees.length === 0) {
      this.getEmployees()
    }
  }

  render() {
    return (
      <>
        {this.state.employees.length > 0 &&
          this.state.employees.map(employee => (
            <tr key={employee.name.first + employee.name.last + employee.email}>
              <td className="text-center"><img alt="random user imported from randomuser.me/api" src={employee.picture.medium}></img></td>
              <td className="text-center">{employee.name.first}</td>
              <td className="text-center">{employee.name.last}</td>
              <td className="text-center">{employee.phone}</td>
              <td className="text-center">{employee.email}</td>
            </tr>
          ))}
      </>
    )
  }
}

  export default Rows;