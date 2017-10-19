'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
    let student = this.props.student
    return (
        <tr key={student.id}>
          <td>
            <NavLink to={`/students/${student.id}`}>
              {student.id}
            </NavLink>
          </td>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          {/* delete*/}
        </tr>
      )
  }
}
