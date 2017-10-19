'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default class StudentItem extends React.Component {
  constructor(props) {
    super(props)
    // this.handleDelete = this.handleDelete.bind(this)
  }

  // handleDelete(event) {
  //   event.preventDefault();
  //   confirm(`This is an irreversible action. Are you sure you want to delete ${this.props.student.first_name}'s entire record?`) &&
  //   this.props.deleteStudent(this.props.id);
  // };

  render() {
    console.log('these are props', this.props)

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
          <td>{student.campusId}</td>
          {/*<td>
          <button onClick={this.handleDelete}>X</button>
          </td>*/}
          <td>
            <button onClick={(evt) => {
              evt.preventDefault();
              confirm('really?') && this.props.deleteStudent(student.id);
            }}>X</button>
          </td>
        </tr>
      )
  }
}
