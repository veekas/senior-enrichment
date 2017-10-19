'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Students</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>CampusId</th>
                <th>Delete</th>
              </tr>
            </thead>
          <tbody>
              { // eventually refactor to move one Student instance to own module
                this.props.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.email}</td>
                    <td>{student.campusId}</td>
                    {/* delete*/}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
