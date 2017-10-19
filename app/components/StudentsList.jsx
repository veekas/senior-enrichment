'use strict';

import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
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
              <th>Campus</th>
              <th>Delete</th>
              </tr>
              </thead>
            <tbody>
              {
                props.students.map(student =>
                  <tr
                    key={student.id}
                    id={student.id}
                    firstName={student.first_name}
                    lastName={student.last_name}
                    campus={student.campus.name}
                    campusId={student.CampusId}
                    // delete={props.deleteStudent}
                  />
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
