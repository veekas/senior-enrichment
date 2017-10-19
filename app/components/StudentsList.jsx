'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';
import StudentItem from '../containers/StudentItem';

export default class extends React.Component {

  componentDidMount() {
    this.props.showAllStudents();
  }

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
                <th>CampusId</th>
                <th>Delete</th>
              </tr>
            </thead>
          <tbody>
              { // eventually refactor to move one Student instance to own module
                this.props.students.map((student) => (
                  <StudentItem key={student.id} student={student} />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
